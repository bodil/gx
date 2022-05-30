/* eslint-disable @typescript-eslint/no-this-alias */
import GObject from "@gx/gi/Gjs/GObject-2.0.js";
import GLib from "@gx/gi/Gjs/GLib-2.0.js";

import { Disposable } from ".";
import * as GObj from "./gobject";

/** A type describing a GLib signal on a specific [[`GObject.Object`]] source. */
export type SignalSpec = {
    target: GObject.Object;
    signal: string;
};

const CellType = /* @__PURE__ */ Symbol("Gx.Ef.CellType");

export type ReadableCell<A> = {
    /** Read the cell's value. */
    (): A;
    /** Get a [[`SignalSpec`]] for this cell. */
    signalSpec(): SignalSpec;
    [CellType]: boolean;
};

export type WritableCell<A> = ReadableCell<A> & {
    /** Set the cell's value. */
    set: (a: A) => void;
    /** Update the cell's value using a function from the old value to the new value. */
    update: (f: (a: A) => A) => void;
};

/**
 * Check if any given object is a readable cell, and cast it
 * to one if so. Returns `null` otherwise.
 */
export function isCell(object: any): ReadableCell<unknown> | null {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (object[CellType] === true) {
        return object as ReadableCell<unknown>;
    }
    return null;
}

/**
 * Check if any given object is a writable cell, and cast it
 * to one if so. Returns `null` otherwise.
 */
export function isWritableCell(object: any): WritableCell<unknown> | null {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (object[CellType] === true && typeof object.set === "function") {
        return object as WritableCell<unknown>;
    }
    return null;
}

/**
 * Create a data cell with the given initial value.
 */
export function cell<A>(value: A): WritableCell<A> {
    return createCell(value);
}

/**
 * Create a value cell with the given initial value.
 * This differs from a data cell in that it only updates if the new value is
 * different from the old value, as determined by the provided
 * equality function, which defaults to [[`Object.is()`]].
 */
export function value<A>(
    value: A,
    equals: (a: A, b: A) => boolean = Object.is
): WritableCell<A> {
    return createCell(value, equals);
}

/**
 * Create a cell for a given property on a [[`GObject.Object`]].
 */
export function prop<
    C extends GObject.Object,
    K extends Extract<keyof C, string>
>(object: C, property: K): WritableCell<C[K]> {
    return Object.assign(() => object[property], {
        signalSpec() {
            return {
                target: object,
                signal: signalForProperty(property),
            };
        },
        set(value: C[K]) {
            object[property] = value;
        },
        update(f: (v: C[K]) => C[K]) {
            object[property] = f(object[property]);
        },
        [CellType]: true,
    });
}

/**
 * Bind an effect to a property on a [[`GObject.Object`]].
 * Whenever the effect's dependent cells update, the
 * property will be updated with the effect's new computed value.
 */
export function bind<A>(
    targetObject: GObject.Object,
    targetProperty: string | GObject.ParamSpec,
    f: () => A
): void {
    if (typeof targetProperty !== "string") {
        targetProperty = targetProperty.get_name();
    }
    const effectNode = new EffectNode(() =>
        targetObject.set_property(targetProperty as string, f())
    );
    registerEffect(effectNode);
    effectNode.run();
}

/**
 * Create a memo. This is an effect with a read only cell which
 * you can use as a dependency in other effects, just like a
 * data cell.
 */
export function memo<A>(f: () => A): ReadableCell<A> {
    const effectNode = new EffectNode(f);
    registerEffect(effectNode);
    effectNode.run();
    return Object.assign(() => effectNode.current, {
        signalSpec() {
            return {
                target: effectNode,
                signal: signalForPSpec(EffectNode.currentSpec),
            };
        },
        [CellType]: true,
    });
}

/**
 * Create an effect. It will automatically detect any cells
 * you read from inside the effect function, and re-run the
 * effect whenever any of them changes.
 */
export function effect<A>(f: () => A): A {
    const effectNode = new EffectNode(f);
    registerEffect(effectNode);
    return effectNode.run();
}

/**
 * Create an effect root. Any effects created inside the
 * root function will be cleaned up when the function
 * terminates. Ideally, the root should wrap your
 * application's main loop like this:
 *
 * ```typescript
 * const app = new Gtk.Application();
 * root(() => app.run(ARGV));
 * ```
 */
export function root<A>(f: () => A): A {
    const rootNode = new EffectNode(f);
    const result = rootNode.run();
    rootNode.dispose();
    return result;
}

/**
 * Create an effect with manually declared dependencies.
 * These will trigger a recomputation in addition to any
 * cells read by the effect function as you'd normally expect.
 * You can provide [[`ReadableCell`]]s as well as [[`SignalSpec`]]s
 * describing signals on a [[`GObject.Object`]].
 */
export function on<A>(
    dependencies: (ReadableCell<unknown> | SignalSpec)[],
    f: () => A
): A {
    const effectNode = new EffectNode(f);
    for (const signal of dependencies) {
        effectNode.addDependency(signal);
    }
    registerEffect(effectNode);
    return effectNode.run();
}

export function onCleanup(f: () => void): void {
    if (Owner !== null) {
        Owner.onCleanup(f);
    }
}

// Private parts:

let Owner: EffectNode<unknown> | null = null;
let Listener: EffectNode<unknown> | null = null;

function signalForProperty(prop: string): string {
    return `notify::${prop}`;
}

function signalForPSpec(pspec: GObject.ParamSpec | string) {
    return signalForProperty(
        typeof pspec === "string" ? pspec : pspec.get_name()
    );
}

function logAccessor(
    target: GObject.Object,
    signalOrProp: GObject.ParamSpec | string
) {
    if (Listener !== null) {
        const signal = signalForPSpec(signalOrProp);

        Listener.log({ target, signal });
    }
}

function registerEffect<A>(node: EffectNode<A>) {
    if (Owner !== null) {
        Owner.addChild(node);
    } else {
        console.warn(
            "Effect was created without a root and won't be garbage collected."
        );
    }
}

function createCell<A>(
    value: A,
    equals?: (a: A, b: A) => boolean
): WritableCell<A> {
    const prop = new CellNode(value, equals);
    return Object.assign(() => prop.value, {
        signalSpec() {
            return {
                target: prop,
                signal: signalForPSpec(CellNode.valueSpec),
            };
        },
        set(value: A) {
            prop.value = value;
        },
        update(f: (v: A) => A) {
            prop.value = f(prop._value);
        },
        [CellType]: true,
    });
}

@GObj.Class
class CellNode<A> extends GObject.Object {
    static valueSpec = GObject.ParamSpec.jsobject(
        "value",
        "value",
        "The cell's current value.",
        GObject.ParamFlags.READWRITE
    );

    @GObj.Property(CellNode.valueSpec)
    get value(): A {
        logAccessor(this, CellNode.valueSpec);
        return this._value;
    }

    set value(value: A) {
        if (this.equals !== undefined && this.equals(value, this._value)) {
            return;
        }
        this._value = value;
        this.notify_by_pspec(CellNode.valueSpec);
    }

    _value: A;
    equals?: (a: A, b: A) => boolean;

    constructor(value: A, equals?: (a: A, b: A) => boolean) {
        super();
        this._value = value;
        this.equals = equals;
    }
}

@GObj.Class
class EffectNode<A> extends GObject.Object implements Disposable {
    static currentSpec = GObject.ParamSpec.jsobject(
        "current",
        "current",
        "The effect's current value.",
        GObject.ParamFlags.READABLE
    );

    @GObj.Property(EffectNode.currentSpec)
    get current(): A {
        logAccessor(this, EffectNode.currentSpec);
        return this.value!;
    }

    effect: () => A;
    value: A | undefined;
    dependencies: Map<GObject.Object, Map<string, number>> | null = null;
    children: Disposable[] | null = null;
    cleanups: ((final: boolean) => void)[] | null = null;
    refresh: number | null = null;

    constructor(effect: () => A) {
        super();
        this.effect = effect;
    }

    addChild(node: Disposable) {
        if (this.children === null) {
            this.children = [];
        }
        this.children.push(node);
    }

    addDependency(signal: ReadableCell<unknown> | SignalSpec) {
        const signalSpec =
            typeof (signal as ReadableCell<unknown>).signalSpec === "function"
                ? (signal as ReadableCell<unknown>).signalSpec()
                : (signal as SignalSpec);
        this.log(signalSpec);
    }

    log(signalSpec: SignalSpec) {
        if (this.dependencies === null) {
            this.dependencies = new Map();
        }
        let targetMap = this.dependencies.get(signalSpec.target);
        if (targetMap === undefined) {
            targetMap = new Map();
            this.dependencies.set(signalSpec.target, targetMap);
        }
        if (!targetMap.has(signalSpec.signal)) {
            targetMap.set(
                signalSpec.signal,
                signalSpec.target.connect(signalSpec.signal, () =>
                    this.scheduleUpdate()
                )
            );
        }
    }

    scheduleUpdate() {
        if (this.refresh === null) {
            this.refresh = GLib.idle_add(GLib.PRIORITY_HIGH_IDLE, () => {
                this.run();
                this.refresh = null;
                return GLib.SOURCE_REMOVE;
            });
        }
    }

    run(): A {
        const oldOwner = Owner;
        const oldListener = Listener;
        Listener = this;
        Owner = this;
        this.cleanup(false);
        const result = this.effect();
        Listener = oldListener;
        Owner = oldOwner;
        this.value = result;
        this.notify_by_pspec(EffectNode.currentSpec);
        return result;
    }

    onCleanup(f: (final: boolean) => void) {
        if (this.cleanups === null) {
            this.cleanups = [f];
        } else {
            this.cleanups.push(f);
        }
    }

    cleanup(final: boolean) {
        this.children?.forEach((child) => child.dispose());
        this.children = null;
        this.cleanups?.forEach((f) => f(final));
        this.cleanups = null;
        this.dependencies?.forEach((targetMap, target) =>
            targetMap.forEach((handle) => target.disconnect(handle))
        );
        this.dependencies = null;
    }

    dispose() {
        if (this.refresh !== null) {
            GLib.source_remove(this.refresh);
        }
        this.cleanup(true);
        this.effect = undefined!;
        this.value = undefined!;
    }
}

@GObj.Class
class Clock extends GObject.Object {
    idleSource?: number;
    jobs: (() => void)[] = [];

    private scheduleTick() {
        if (this.idleSource !== undefined) {
            return;
        }
        this.idleSource = GLib.idle_add(GLib.PRIORITY_HIGH_IDLE, () => {
            this.process();
            if (this.jobs.length > 0) {
                return GLib.SOURCE_CONTINUE;
            }
            this.idleSource = undefined;
            return GLib.SOURCE_REMOVE;
        });
    }

    private process() {
        const queue = this.jobs;
        this.jobs = [];
        for (const job of queue) {
            job();
        }
    }
}
