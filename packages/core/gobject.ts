import { GObject } from "@gx/gi";

export function gtypeFor<A>(object: A): GObject.GType | undefined {
    if ((object as any).constructor !== undefined) {
        return (object as any).constructor.$gtype;
    }
    return undefined;
}

export function gtypeForObject<C extends GObject.Object>(object: C): GObject.GType {
    return (object.constructor as any).$gtype;
}

export function gtypeForConstructor<C extends GObject.Object>(
    constructor: new (...args: any[]) => C
): GObject.GType {
    return (constructor as any).$gtype;
}

/**
 * Check if a value is a {@link GObject.Object} which can be cast to a given class or interface.
 *
 * ```typescript
 * const obj: GObject.Object = new Gtk.Widget();
 * if (GObj.isA(Gtk.Widget, obj)) {
 *     console.log("It's a widget!");
 * }
 *
 * if (!GObj.isA(Gtk.Widget, "Hello Joe!"")) {
 *     console.log("Not a widget!");
 * }
 * ```
 */
export function isA<C extends GObject.Object>(cls: Constructor<C>, obj: unknown): obj is C {
    const gtype = gtypeFor(obj);
    if (gtype === undefined) {
        return false;
    }
    return GObject.type_is_a(gtype, gtypeForConstructor(cls));
}

/**
 * Check if a value is a constructor for a {@link GObject.Object} subclass which implements the
 * given class or interface.
 */
export function isConstructor<C extends GObject.Object>(
    cls: Constructor<C>,
    obj: any
): obj is Constructor<C> {
    return obj.$gtype !== undefined && GObject.type_is_a(obj.$gtype, gtypeForConstructor(cls));
}

/**
 * Attempt to cast a {@link GObject.Object} into a subclass or interface it implements.
 *
 * Returns the object with the new type if successful, `null` otherwise.
 *
 * ```typescript
 * const obj: GObject.Object = new Gtk.Widget();
 * const widget = GObj.tryCast(Gtk.Widget, obj);
 * if (widget !== null) {
 *     widget.show();
 * }
 * ```
 */
export function tryCast<A extends GObject.Object, C extends GObject.Object>(
    cls: Constructor<C>,
    obj: A
): C | undefined {
    return GObject.type_is_a(gtypeForObject(obj), gtypeForConstructor(cls))
        ? (obj as unknown as C)
        : undefined;
}

/**
 * Attempt to cast a {@link GObject.Object} into a subclass or interface it implements.
 *
 * Returns the object with the new type if successful. Throws an exception otherwise.
 *
 * ```typescript
 * const obj: GObject.Object = new Gtk.Widget();
 * const widget = GObj.assertCast(Gtk.Widget, obj);
 * widget.show();
 * ```
 */
export function assertCast<A extends GObject.Object, C extends GObject.Object>(
    cls: Constructor<C>,
    obj: A | null
): C {
    if (obj === null) {
        throw new Error(`Can't cast null value to ${gtypeForConstructor(cls).name}`);
    }
    const result = tryCast(cls, obj);
    if (result === undefined) {
        throw new Error(
            `${gtypeForObject(obj).name} can't be cast to ${gtypeForConstructor(cls).name}`
        );
    } else {
        return result;
    }
}

const gmeta = Symbol("GObject.Decorator.Meta");

export type Constructor<C extends GObject.Object> = new (...args: any[]) => C;

export type SignalSpec = {
    [key: string]: {
        flags?: GObject.SignalFlags;
        param_types?: GObject.GType[];
        return_type?: GObject.GType;
        accumulator?: GObject.AccumulatorType;
    };
};

type MetaInfo = GObject.MetaInfo<
    { [key: string]: GObject.ParamSpec },
    { $gtype: GObject.GType }[],
    SignalSpec
>;

type GMeta<C extends GObject.Object> = Constructor<C> & {
    [gmeta]: MetaInfo;
};

function decorateMeta<C extends GObject.Object>(target: Constructor<C>): GMeta<C> {
    const decorated = target as unknown as GMeta<C>;
    if (decorated[gmeta] === undefined) {
        decorated[gmeta] = {};
    }
    return decorated;
}

/**
 * Register a class as a GObject class.
 *
 * The class must inherit from {@link GObject.Object} or a subclass of it.
 *
 * This decorator must be applied to the class you wish to register, and must
 * be the first decorator applied.
 *
 * #### Examples
 *
 * ```typescript
 * @GObj.Class // The registered type name will be "Gjs_MyClass"
 * class MyClass extends GObject.Object {}
 * ```
 *
 * ```typescript
 * @GObj.Class("MyClass")
 * class MyClass extends GObject.Object {}
 * ```
 *
 * @param typeName Optionally specify a unique type name to register as.
 *                 The default is to append `Gjs_` to the class name.
 *                 When using composite templates, you must ensure the
 *                 class name used here matches the one given in the template.
 */
export function Class<C extends GObject.Object>(typeName: Constructor<C> | string): any {
    if (typeof typeName === "string") {
        return function (targetConstructor: Constructor<C>) {
            const target = decorateMeta(targetConstructor);
            target[gmeta].GTypeName = typeName;
            Class(target);
        };
    }
    const target = decorateMeta(typeName);
    const metadata = target[gmeta] ?? {};
    target[gmeta] = undefined!;
    GObject.registerClass(metadata, target as typeof typeName);
}

/**
 * Pass custom arguments to {@link GObject.registerClass}.
 *
 * *CAUTION:* This will overwrite any properties set by the regular decorators.
 * Use at your own risk.
 *
 * @param overrides A key/value map that will be used to extend the argument object
 *                  passed to {@link @gx/gi!GObject.registerClass | `GObject.registerClass()`} in the
 *                  {@linkcode Class} decorator. Keys in this object will overwrite keys defined by
 *                  previous decorators.
 */
export function Override<C extends GObject.Object>(overrides: MetaInfo) {
    return function (targetConstructor: Constructor<C>) {
        const target = decorateMeta(targetConstructor);
        target[gmeta] = { ...target[gmeta], ...overrides };
    };
}

/**
 * Declare a list of {@link GObject.Interface}s this class implements.
 *
 * #### Examples
 *
 * ```typescript
 * @GObj.Class
 * @GObj.Implements([Gtk.Orientable])
 * class MyOrientableWidget extends Gtk.Widget {
 *    ...
 * }
 * ```
 */
export function Implements<C extends GObject.Object>(interfaces: { $gtype: GObject.GType }[]) {
    return function (targetConstructor: Constructor<C>) {
        const target = decorateMeta(targetConstructor);
        target[gmeta].Implements = interfaces;
    };
}

/**
 * Declare a composite template for this class.
 *
 * #### Examples
 *
 * ```typescript
 * @GObj.Class("MyTemplateClass")
 * @GObj.Template(require("./template.ui").default)
 * class MyTemplateClass extends Gtk.ApplicationWindow {
 *     ...
 * }
 * ```
 *
 * @param template A composite template as a [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) containing an XML document.
 *                 You can call {@link readFile | `readFile()`} to read a file from disk, or arrange for your
 *                 bundler to provide it using standard import APIs, as in the example above.
 */
export function Template<C extends GObject.Object>(template: Uint8Array) {
    return function (targetConstructor: Constructor<C>) {
        if (!(template instanceof Uint8Array)) {
            throw new Error(
                "Template must be an Uint8Array, try using Gx.GObj.readFile() to load it"
            );
        }
        const target = decorateMeta(targetConstructor);
        target[gmeta].Template = template;
    };
}

/**
 * Declare a template child reference.
 *
 * This should be declared on a property getter with the same name as the child's ID.
 * The getter will be overwritten by the decorator, so it's recommended to do nothing but
 * return `null as any`. This is an unfortunate hack to ensure TypeScript knows the
 * getter exists and has the right type.
 *
 * #### Examples
 *
 * ```typescript
 * @GObj.Class("MyTemplateClass")
 * @GObj.Template(require("./template.ui").default)
 * class MyTemplateClass extends Gtk.ApplicationWindow {
 *     @GObj.TemplateChild
 *     get childButton(): Gtk.Button { return null as any; }
 * }
 * ```
 */
export function TemplateChild<C extends GObject.Object>(
    proto: C,
    name: string,
    _desc: PropertyDescriptor
): PropertyDescriptor {
    const target = decorateMeta(proto.constructor as Constructor<C>);
    const meta = target[gmeta];
    if (meta.InternalChildren === undefined) {
        meta.InternalChildren = [];
    }
    meta.InternalChildren.push(name);
    const privateName = `_${name}`;
    return {
        configurable: false,
        enumerable: true,
        get() {
            return (this as any)[privateName];
        },
    };
}

/**
 * Declare a property.
 *
 * You must apply this decorator to an accessor. If you have both
 * `get` and `set` accessors, it should be applied to the one which appears first in
 * the class definition.
 *
 * The `set` accessor should make sure to call {@link GObject.Object.notify | `GObject.Object.notify()`}.
 *
 * The property's name in the {@link GObject.ParamSpec} must match the name of the object
 * property, with `-` substituted for `_`. The decorator will throw a runtime error if this
 * is not the case.
 *
 * #### Examples
 *
 * ```typescript
 * @GObj.Class
 * class MyClass extends GObject.Object {
 *     @GObj.Property(GObject.ParamSpec.boolean(
 *         "my-property",
 *         "My property",
 *         "This is my boolean property.",
 *         GObject.ParamFlags.READWRITE,
 *         false
 *     ))
 *     get my_property(): boolean {
 *         return this._my_property;
 *     }
 *
 *     set my_property(value: boolean) {
 *         this._my_property = value;
 *         this.notify("my_property");
 *     }
 * }
 * ```
 *
 * @param paramSpec A {@link GObject.ParamSpec} describing the property.
 * @returns
 */
export function Property<C extends GObject.Object>(paramSpec: GObject.ParamSpec) {
    return function (proto: C, name: string, descriptor?: PropertyDescriptor) {
        const target = decorateMeta(proto.constructor as Constructor<C>);
        const meta = target[gmeta];
        if (meta.Properties === undefined) {
            meta.Properties = {};
        }
        const propName = name.replace("_", "-");
        if (propName !== paramSpec.name) {
            throw new Error(
                `@Property name must be the snake case equivalent of the GObject property name: was "${name} but should be ${paramSpec.name.replace(
                    "-",
                    "_"
                )}"`
            );
        }
        if (descriptor !== undefined) {
            descriptor.configurable = false;
        } else {
            throw new Error("@Property must decorate a property accessor, not a property.");
        }
        meta.Properties[propName] = paramSpec;
    };
}

/**
 * Declare a set of signals for this object.
 */
export function Signals<C extends GObject.Object>(signals: SignalSpec) {
    return function (targetConstructor: Constructor<C>) {
        const target = decorateMeta(targetConstructor);
        target[gmeta].Signals = signals;
    };
}
