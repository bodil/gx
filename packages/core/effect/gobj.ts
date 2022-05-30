import { GObject } from "@gx/gi";
import { CellType, CellTypeFlags, WritableCell } from ".";
import { logUpdate, getOwner, logAccessor, registerEffect, signalForProperty } from "./context";
import { EffectNode } from "./effectnode";

/**
 * Create a cell linked to a given property on a
 * [GObject.Object](https://gjs-docs.gnome.org/gobject20/gobject.object).
 */
export function prop<C extends GObject.Object, K extends Extract<keyof C, string>>(
    object: C,
    property: K,
    options: { name?: string } = {}
): WritableCell<C[K]> {
    const signalSpec = {
        target: object,
        signal: signalForProperty(property),
    };
    const name =
        options.name !== undefined
            ? options.name
            : `${(object as any).constructor.$gtype.name as string}.${property}`;
    return {
        signalSpec,

        get(): C[K] {
            logAccessor(signalSpec, name);
            return object[property];
        },

        set(value: C[K]) {
            logUpdate(name, value);
            object[property] = value;
        },

        update(f: (v: C[K]) => C[K]) {
            object[property] = f(object[property]);
        },

        [CellType]: CellTypeFlags.Readable | CellTypeFlags.Writable,
        name,
    };
}

/**
 * Bind an effect to a property on a
 * [GObject.Object](https://gjs-docs.gnome.org/gobject20/gobject.object).
 * Whenever the effect's dependent cells update, the property will be updated
 * with the effect's new computed value.
 *
 * If the effect evaluates to `undefined`, the property will not be set. This
 * allows you to pass a {@linkcode ref} cell as a property binding and defer
 * initialising the property until the cell has a defined value.
 */
export function bind<A>(
    targetObject: GObject.Object,
    targetProperty: string | GObject.ParamSpec,
    f: () => A,
    options: { name?: string; defer?: boolean } = {}
): void {
    const propertyName =
        typeof targetProperty === "string" ? targetProperty : targetProperty.get_name();
    const name =
        options.name ??
        `${(targetObject as any).constructor.$gtype.name as string}.${propertyName}`;
    const effectNode = new EffectNode(() => {
        const value = f();
        if (value !== undefined) {
            targetObject.set_property(propertyName, value);
        }
    }, name);
    registerEffect(effectNode);
    effectNode.run();
    if (!effectNode.hasSideEffects()) {
        getOwner()?.removeChild(effectNode);
    }
}
