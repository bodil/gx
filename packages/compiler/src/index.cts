/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import jsx from "@babel/plugin-syntax-jsx";
import { template, types as t, NodePath, PluginObj } from "@babel/core";

let needsImport = false;

function adaptPropertyName(
    node: t.JSXNamespacedName | t.JSXIdentifier
): t.StringLiteral {
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
    if (t.isMemberExpression(node)) {
        return isStaticExpression(node.object);
    }
    if (
        t.isStringLiteral(node) ||
        t.isNumericLiteral(node) ||
        t.isBooleanLiteral(node) ||
        t.isIdentifier(node) ||
        t.isThisExpression(node)
    ) {
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
    return t.memberExpression(
        unJsxIdentifier(node.object),
        unJsxIdentifier(node.property)
    );
}

function transformJSX(path: NodePath) {
    if (path.isJSXElement()) {
        const desc = path.node.openingElement;
        const attributes = desc.attributes as t.JSXAttribute[];
        const constructor = unJsxIdentifier(desc.name);
        const gobjProperties = attributes.filter((attr) =>
            t.isJSXIdentifier(attr.name)
        );
        const staticProperties: t.ObjectProperty[] = [];
        const computedProperties: t.JSXAttribute[] = [];
        for (const property of gobjProperties) {
            if (isStaticExpression(property)) {
                staticProperties.push(
                    t.objectProperty(
                        adaptPropertyName(property.name),
                        adaptExpression(property.value)
                    )
                );
            } else {
                computedProperties.push(property);
            }
        }
        const staticPropertyObject = t.objectExpression(staticProperties);
        const metaProperties = dictFromAttributes(
            attributes.filter((attr) => t.isJSXNamespacedName(attr.name))
        );

        const statements: t.Statement[] = [
            template(
                `const obj = new %%constructor%%(%%staticPropertyObject%%);`
            )({
                constructor,
                staticPropertyObject,
            }) as t.Statement,
        ];

        for (const property of computedProperties) {
            const propertyName = adaptPropertyName(property.name);
            const computation = adaptExpression(property.value);
            needsImport = true;
            statements.push(
                template(
                    `__GX.Ef.bind(obj, %%propertyName%%, () => %%computation%%);`
                )({ propertyName, computation }) as t.Statement
            );
        }

        if (metaProperties["gtk:id"] !== undefined) {
            const value = metaProperties["gtk:id"];
            needsImport = true;
            statements.push(
                template(`__GX.JSX.builder.expose_object(%%value%%, obj);`)({
                    value,
                }) as t.Statement
            );
        }

        if (metaProperties["gtk:class"] !== undefined) {
            const styles = metaProperties["gtk:class"];
            needsImport = true;
            statements.push(
                template(`__GX.JSX.applyStyles(obj, %%styles%%);`)({
                    styles,
                }) as t.Statement
            );
        }

        const childMeta: t.ObjectExpression | null = t.objectExpression([]);
        if (metaProperties["gtk:type"] !== undefined) {
            childMeta.properties.push(
                t.objectProperty(
                    t.identifier("type"),
                    metaProperties["gtk:type"] as any
                )
            );
        }
        if (metaProperties["gtk:layout"] !== undefined) {
            childMeta.properties.push(
                t.objectProperty(
                    t.identifier("layout"),
                    metaProperties["gtk:layout"] as any
                )
            );
        }
        if (childMeta.properties.length > 0) {
            needsImport = true;
            statements.push(
                template(`obj[__GX.JSX.jsxGtkMeta] = %%childMeta%%;`)({
                    childMeta,
                }) as t.Statement
            );
        }

        const children = path.node.children;
        for (const child of children) {
            needsImport = true;
            statements.push(
                template(`__GX.JSX.addChild(obj, %%child%%);`)({
                    child,
                }) as t.Statement
            );
        }

        if (metaProperties["gtk:on"] !== undefined) {
            const gtkOnProperty = metaProperties["gtk:on"];
            if (t.isObjectExpression(gtkOnProperty)) {
                for (const objectProperty of gtkOnProperty.properties) {
                    if (t.isObjectProperty(objectProperty)) {
                        const propertyKey = objectProperty.key;
                        if (
                            t.isStringLiteral(propertyKey) ||
                            t.isIdentifier(propertyKey)
                        ) {
                            const signal = t.stringLiteral(
                                t.isIdentifier(propertyKey)
                                    ? propertyKey.name
                                    : propertyKey.value
                            );
                            const handler = objectProperty.value;
                            statements.push(
                                template(
                                    `obj.connect(%%signal%%, %%handler%%)`
                                )({
                                    signal,
                                    handler,
                                }) as t.Statement
                            );
                        } else {
                            console.log("ERROR: wrong node type", propertyKey);
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
                throw new Error(
                    "Value for gtk:on property must be an object literal."
                );
            }
        }

        statements.push(template(`return obj;`)() as t.Statement);
        path.replaceWith(
            t.callExpression(
                t.arrowFunctionExpression([], t.blockStatement(statements)),
                []
            )
        );
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
