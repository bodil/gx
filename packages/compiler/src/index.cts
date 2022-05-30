import jsx from "@babel/plugin-syntax-jsx";
import { template, types as t, NodePath, PluginObj } from "@babel/core";

let needsImport = false;

function adaptPropertyName(node: t.JSXNamespacedName | t.JSXIdentifier): t.StringLiteral {
    if (t.isJSXNamespacedName(node)) {
        const space = node.namespace.name;
        const { name } = node.name;
        return t.stringLiteral(`${space}:${name}`);
    } else if (t.isJSXIdentifier(node)) {
        return t.stringLiteral(node.name);
    }
    throw new Error();
}

function adaptExpression(node: any) {
    if (t.isJSXExpressionContainer(node)) {
        return node.expression;
    }
    return node;
}

function isStaticExpression(node: any): boolean {
    if (t.isJSXAttribute(node)) {
        return isStaticExpression(node.value);
    }
    if (t.isJSXExpressionContainer(node)) {
        return isStaticExpression(node.expression);
    }
    if (t.isArrayExpression(node)) {
        for (const element of node.elements) {
            if (!isStaticExpression(element)) {
                return false;
            }
        }
        return true;
    }
    if ((t.isLiteral(node) && !t.isTemplateLiteral(node)) || t.isIdentifier(node)) {
        return true;
    }
    return false;
}

function dictFromAttributes(attributes: t.JSXAttribute[]): {
    [key: string]: t.Node;
} {
    const dict = {};
    for (const attribute of attributes) {
        const key = adaptPropertyName(attribute.name).value;
        const value = adaptExpression(attribute.value);
        dict[key] = value;
    }
    return dict;
}

function unJsxIdentifier(
    node: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName
): t.MemberExpression | t.Identifier {
    if (t.isJSXNamespacedName(node)) {
        throw new Error("JSX nodes can't be namespaced.");
    }
    if (t.isJSXIdentifier(node)) {
        return t.identifier(node.name);
    }
    return t.memberExpression(unJsxIdentifier(node.object), unJsxIdentifier(node.property));
}

function findAttributePath(path: NodePath<t.JSXElement>, name: string): NodePath | undefined {
    const props = path.node.openingElement.attributes;
    const index = props.findIndex((prop) => {
        if (t.isJSXAttribute(prop)) {
            return adaptPropertyName(prop.name).value === name;
        }
        return false;
    });
    if (index < 0) {
        return undefined;
    }
    return path.get(`openingElement.attributes.${index}`) as unknown as NodePath;
}

function stringifyIdent(node: any): t.StringLiteral {
    function render(node: any): string | undefined {
        if (t.isIdentifier(node)) {
            return node.name;
        }
        if (t.isMemberExpression(node)) {
            const obj = render(node.object);
            if (obj === undefined) {
                return undefined;
            }
            const prop = render(node.property);
            if (prop === undefined) {
                return undefined;
            }
            return `${obj}.${prop}`;
        }
        return undefined;
    }
    const result = render(node);

    return t.stringLiteral(result === undefined ? "[Object]" : result);
}

function transformJSX(path: NodePath) {
    if (path.isJSXElement()) {
        const desc = path.node.openingElement;
        const attributes = desc.attributes as t.JSXAttribute[];
        const constructor = unJsxIdentifier(desc.name);
        const gobjProperties = attributes.filter((attr) => t.isJSXIdentifier(attr.name));
        const metaProperties = dictFromAttributes(
            attributes.filter((attr) => t.isJSXNamespacedName(attr.name))
        );
        const staticProperties: t.ObjectProperty[] = [];
        const computedProperties: t.JSXAttribute[] = [];
        for (const property of gobjProperties) {
            const propertyName = adaptPropertyName(property.name);
            if (propertyName.value === "name" && metaProperties["gtk:id"] !== undefined) {
                const propPath = findAttributePath(path, "name")!;
                throw propPath.buildCodeFrameError(
                    `Can't have both a "name" property and a "gtk:id" property.`
                );
            }
            if (isStaticExpression(property)) {
                staticProperties.push(
                    t.objectProperty(propertyName, adaptExpression(property.value))
                );
            } else {
                computedProperties.push(property);
            }
        }

        if (metaProperties["gtk:id"] !== undefined) {
            const value = metaProperties["gtk:id"];
            staticProperties.push(t.objectProperty(t.identifier("name"), adaptExpression(value)));
        }

        const staticPropertyObject = t.objectExpression(staticProperties);
        const computedPropertyObject = t.objectExpression(
            computedProperties.map((property) => {
                const propertyName = adaptPropertyName(property.name);
                const computation = adaptExpression(property.value);
                return t.objectProperty(propertyName, t.arrowFunctionExpression([], computation));
            })
        );

        const constructorName = stringifyIdent(constructor);

        needsImport = true;
        const statements: t.Statement[] = [
            template(
                `const obj = __GX.JSX.construct(%%constructor%%, %%staticPropertyObject%%, %%computedPropertyObject%%);`
            )({
                constructor,
                staticPropertyObject,
                computedPropertyObject,
            }) as t.Statement,
        ];

        if (metaProperties["gtk:id"] !== undefined) {
            const value = metaProperties["gtk:id"];
            statements.push(
                template(`__GX.JSX.builder.expose_object(%%value%%, obj);`)({
                    value,
                }) as t.Statement
            );
        }

        if (metaProperties["gtk:ref"] !== undefined) {
            const ref = metaProperties["gtk:ref"];
            statements.push(
                template(`%%ref%%.set(obj);`)({
                    ref,
                }) as t.Statement
            );
        }

        if (metaProperties["gtk:class"] !== undefined) {
            const classes = metaProperties["gtk:class"];
            if (isStaticExpression(classes)) {
                statements.push(
                    template(`__GX.JSX.applyStyleClasses(obj, %%classes%%);`)({
                        classes,
                    }) as t.Statement
                );
            } else {
                statements.push(
                    template(
                        `__GX.Ef.effect(() => {
                            __GX.JSX.applyStyleClasses(obj, %%classes%%);
                        }, { name: %%constructorName%% + ".JSX.applyStyleClasses" });`
                    )({
                        classes,
                        constructorName,
                    }) as t.Statement
                );
            }
        }

        const childMeta: t.ObjectExpression | null = t.objectExpression([]);
        if (metaProperties["gtk:type"] !== undefined) {
            childMeta.properties.push(
                t.objectProperty(t.identifier("type"), metaProperties["gtk:type"] as any)
            );
        }
        if (metaProperties["gtk:layout"] !== undefined) {
            childMeta.properties.push(
                t.objectProperty(t.identifier("layout"), metaProperties["gtk:layout"] as any)
            );
        }
        if (childMeta.properties.length > 0) {
            statements.push(
                template(`obj[__GX.JSX.jsxGtkMeta] = %%childMeta%%;`)({
                    childMeta,
                }) as t.Statement
            );
        }

        const children = path.node.children;
        const childArgs: t.Expression[] = [];
        for (const child of children) {
            if (t.isJSXExpressionContainer(child)) {
                childArgs.push(
                    template.expression(`__GX.Ef.memo(() => %%expr%%)`)({
                        expr: child.expression,
                    })
                );
            } else if (t.isJSXFragment(child)) {
                throw new Error("JSX fragments not yet supported.");
            } else if (t.isJSXSpreadChild(child)) {
                throw new Error("JSX spread syntax not yet supported.");
            } else if (t.isJSXText(child)) {
                throw new Error("Encountered unexpected JSXText node");
            } else {
                childArgs.push(child);
            }
        }
        if (childArgs.length > 0) {
            statements.push(
                template(
                    `const children = __GX.Ef.buildArray(%%childArgs%%, { name: %%constructorName%% + ".JSX.childArgs" });`
                )({
                    childArgs: t.arrayExpression(childArgs),
                    constructorName,
                }) as t.Statement
            );
            statements.push(
                template(`__GX.Ef.effect(() => {
                        __GX.JSX.syncChildren(obj, children.get());
                    }, { name: %%constructorName%% + ".JSX.childExpression" });`)({
                    constructorName,
                }) as t.Statement
            );
        }

        if (metaProperties["gtk:on"] !== undefined) {
            const gtkOnProperty = metaProperties["gtk:on"];
            if (t.isObjectExpression(gtkOnProperty)) {
                for (const objectProperty of gtkOnProperty.properties) {
                    if (t.isObjectProperty(objectProperty)) {
                        const propertyKey = objectProperty.key;
                        if (t.isStringLiteral(propertyKey) || t.isIdentifier(propertyKey)) {
                            const signal = t.stringLiteral(
                                t.isIdentifier(propertyKey) ? propertyKey.name : propertyKey.value
                            );
                            const handler = objectProperty.value;
                            statements.push(
                                template(`obj.connect(%%signal%%, %%handler%%)`)({
                                    signal,
                                    handler,
                                }) as t.Statement
                            );
                        } else {
                            throw new Error(
                                "gtk:on property keys must be identifiers or string literals."
                            );
                        }
                    } else {
                        throw new Error(
                            "gtk:on object can only contain properties, not methods or spreads."
                        );
                    }
                }
            } else {
                throw new Error("Value for gtk:on property must be an object literal.");
            }
        }

        statements.push(template(`return obj;`)() as t.Statement);
        path.replaceWith(
            t.callExpression(t.arrowFunctionExpression([], t.blockStatement(statements)), [])
        );
    } else {
        throw new Error(`Unexpected node where JSXElement was expected: ${path.node.type}`);
    }
}

function stripJSXText(path: NodePath) {
    if (path.isJSXText()) {
        if (path.node.value.trim() !== "") {
            throw path.buildCodeFrameError("JSX text nodes are not allowed.");
        } else {
            path.remove();
        }
    }
}

function transformProgram(path: NodePath) {
    if (path.isProgram()) {
        needsImport = false;
        path.traverse({
            JSXElement: { exit: transformJSX },
            JSXText: stripJSXText,
        });
        if (needsImport) {
            needsImport = false;
            path.node.body.unshift(
                t.importDeclaration(
                    [t.importNamespaceSpecifier(t.identifier("__GX"))],
                    t.stringLiteral("@gx/core")
                )
            );
        }
    } else {
        throw new Error();
    }
}

export default function (): PluginObj {
    return {
        inherits: jsx,
        visitor: {
            Program: { exit: transformProgram },
        },
    };
}
