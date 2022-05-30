import { GObject } from "@gx/gi";
import { SignalSpec } from ".";
import * as GObj from "../gobject";
import { logUpdate, logAccessor } from "./context";

export function object<A extends { [key: string]: unknown }>(
    object: A,
    options: {
        name?: string;
        equals?: boolean | (<K extends keyof A>(prop: K, a: A[K], b: A[K]) => boolean);
    } = {}
): A {
    const signaller = new ProxySignaller();
    const name = (prop: string) => `${options.name ?? "[object]"}.${prop}`;
    const equals =
        typeof options.equals === "function"
            ? options.equals
            : options.equals === true || options.equals === undefined
            ? <K extends keyof A>(prop: K, a: A[K], b: A[K]) => Object.is(a, b)
            : undefined;
    return new Proxy(object, {
        get(target, prop, receiver) {
            if (typeof prop === "string") {
                logAccessor(signaller.signalSpec(prop), name(prop));
                return target[prop];
            }
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            if (typeof prop === "string") {
                const changed =
                    equals === undefined ? true : !equals(prop, (target as any)[prop], value);
                (target as Record<string, unknown>)[prop] = value;
                if (changed) {
                    logUpdate(name(prop), value);
                    signaller.update(prop);
                }
                return true;
            }
            Reflect.set(target, prop, value, receiver);
            return true;
        },
    });
}

@GObj.Class
@GObj.Signals({ update: { param_types: [GObject.TYPE_STRING] } })
class ProxySignaller extends GObject.Object {
    signalSpec(prop: string): SignalSpec {
        return {
            target: this,
            signal: "update",
            detail: prop,
        };
    }

    update(prop: string) {
        this.emit("update", prop);
    }
}
