import { GLib, GObject } from "@gx/gi";

import { getOwner, registerEffect, runInContext, installEffect } from "./context";
import { CellNode } from "./cellnode";
import { EffectNode } from "./effectnode";
import { Scheduler } from "./scheduler";
import { Disposable, logException } from "..";

import { object } from "./object";
import { asyncRequest, AsyncRequestResult } from "./async";
import { bind, prop } from "./gobj";
import { mapArray, buildArray } from "./array";

export { getOwner, object, asyncRequest, AsyncRequestResult, bind, prop, mapArray, buildArray };

/** A type describing a GLib signal on a specific source. */
export interface SignalSpec {
    /** The target object. */
    target: GObject.Object;
    /** The specific signal to listen for. */
    signal: string;
    /** If defined, the signal's detail must equal this value. */
    detail?: any;
}

/** @internal */
export const CellType = /* @__PURE__ */ Symbol("Gx.Ef.CellType");

export enum CellTypeFlags {
    Readable = 1,
    Writable = 2,
    Deferred = 4,
}

/**
 * A read only cell containing a reactive value.
 */
export interface ReadableCell<A> {
    /** Read the cell's value. */
    get(): A;
    /** Get a {@linkcode SignalSpec} for this cell. */
    signalSpec: SignalSpec;
    name?: string;
    [CellType]: CellTypeFlags;
}

/**
 * A writable cell containing a reactive value.
 */
export interface WritableCell<A> extends ReadableCell<A> {
    /** Set the cell's value. */
    set(a: A): void;
    /** Update the cell's value using a function from the old value to the new value. */
    update(f: (a: A) => A): void;
}

/**
 * Check if any given object is a readable cell.
 */
export function isCell(object: any): object is ReadableCell<unknown> {
    return CellType in object;
}

/**
 * Check if any given object is a writable cell.
 */
export function isWritableCell(object: any): object is WritableCell<unknown> {
    return isCell(object) && (object[CellType] & CellTypeFlags.Writable) === CellTypeFlags.Writable;
}

/**
 * Create a cell with the given initial value.
 */
export function cell<A>(
    value: A,
    options: { name?: string; equals?: (a: A, b: A) => boolean } = {}
): WritableCell<A> {
    return new CellNode(value, options.name, options.equals);
}

/**
 * Create a cell containing an initially undefined value.
 *
 * This combines with {@linkcode onRef | onRef()} to defer an effect until a
 * cell has been initialised, and with the `gtk:ref` JSX property to initialise
 * a `ref` cell upon object construction.
 *
 * ```typescript
 * const myButtonRef = Ef.ref<Gtk.Button>();
 * Ef.onRef(myButtonRef, () => {
 *     myButtonRef.get().set_label("Hello Joe!");
 * });
 * const button = <Gtk.Button gtk:ref={myButtonRef} />;
 * ```
 */
export function ref<A extends GObject.Object>(name?: string): WritableCell<A | undefined> {
    const ref = new CellNode(undefined, name, Object.is);
    ref[CellType] |= CellTypeFlags.Deferred;
    return ref;
}

/**
 * Create a memo. This is an effect with a read only cell which you can use as a
 * dependency in other effects, just like a data cell.
 *
 * It tracks its dependencies and recalculates itself when they change,
 * propagating the recalculated value to its dependents in turn.
 *
 * ```typescript
 * const i = Ef.cell(2);
 * const iPlusTwo = Ef.memo(() => i.get() + 2);
 * Ef.effect(() => console.log(iPlusTwo.get()));
 * ```
 */
export function memo<A>(f: () => A, options: { name?: string } = {}): ReadableCell<A> {
    const effectNode = new EffectNode(f, options.name);
    registerEffect(effectNode);
    effectNode.run();
    return effectNode;
}

/**
 * Create an effect. It will automatically detect any cells you read from inside
 * the effect function, and re-run the effect whenever any of them changes.
 *
 * The `initial` option can be used to specify a different function for the
 * effect's first run. If provided, the `initial` function will be called on the
 * effect's first run, which happens before the `effect()` call returns, and the
 * regular effect function will be called whenever the effect is recalculated
 * subsequently.
 */
export function effect<A>(f: () => A, options: { name?: string; initial?: () => A } = {}): A {
    if (options.initial !== undefined) {
        const initial = options.initial;
        const subsequent = f;
        let firstRun = true;
        f = () => {
            if (firstRun) {
                firstRun = false;
                return initial();
            }
            return subsequent();
        };
    }
    return installEffect(new EffectNode(f, options.name));
}

/**
 * Create an effect root. Any effects created inside the root function will be
 * cleaned up when the function terminates. Ideally, the root should wrap your
 * application's main loop like this:
 *
 * ```typescript
 * const app = new Gtk.Application();
 * await root(() => app.run(ARGV));
 * ```
 */
export async function root<A>(
    f: () => A | PromiseLike<A>,
    options: { name?: string } = {}
): Promise<A> {
    const rootNode = new EffectNode(f, options.name ?? "[Root]");
    rootNode.scheduler = new Scheduler();
    const result = await Promise.resolve(rootNode.run());
    await rootNode.scheduler.join();
    rootNode.dispose();
    return result;
}

export function createRoot<A>(
    f: () => A,
    options: { name?: string } = {}
): [ReadableCell<A> & Disposable, A] {
    const rootNode = new EffectNode(f, options.name ?? "[Root]");
    rootNode.scheduler = new Scheduler({ onException: logException });
    const result = rootNode.run();
    return [rootNode, result];
}

/** Run a function without dependency tracking.
 *
 * When inside an effect, running code wrapped in `untrack()` will disable
 * dependency tracking inside that function, meaning that cells read inside it
 * won't trigger a re-run of the effect when they change.
 */
export function untrack<A>(f: () => A): A {
    return runInContext(undefined, null, f);
}

/**
 * Create an effect with manually declared dependencies. You can provide
 * {@linkcode ReadableCell}s as well as {@linkcode SignalSpec}s describing
 * signals on a {@link @gx/gi!GObject.Object:class | `GObject.Object`}.
 *
 * Please note that accessors called from this effect will *not* be
 * automatically tracked, as with {@link untrack | `untrack()`}. Only your
 * manually declared dependencies will be tracked.
 */
export function on<A>(
    dependencies: (ReadableCell<unknown> | SignalSpec)[],
    f: () => A,
    options: { name?: string } = {}
): A {
    const effectNode = new EffectNode(() => untrack(() => f()), options.name);
    for (const signal of dependencies) {
        effectNode.addDependency(signal);
    }
    registerEffect(effectNode);
    return effectNode.run();
}

/**
 * Create a deferred effect which will run when a cell is set to a value that
 * isn't `undefined`.
 *
 * This works like {@linkcode on | on()}, in that dependencies will not be
 * automatically tracked, the cell passed as the `ref` argument will be the only
 * dependency. It differs from {@linkcode on | on()} in that the effect won't
 * actually run until the cell has a defined value.
 */
export function onRef<A>(
    ref: ReadableCell<A | undefined>,
    f: (value: A) => void,
    options: { name?: string } = {}
) {
    return on(
        [ref],
        () => {
            const value = ref.get();
            if (value !== undefined) {
                f(value);
            }
        },
        options
    );
}

/**
 * Run a cleanup function when an effect's scope is cleaned up, which happens
 * when the effect is re-run as well as when its root is disposed.
 */
export function onCleanup(f: () => void): void {
    const owner = getOwner();
    if (owner !== null) {
        owner.onCleanup(f);
    } else {
        throw new Error("You can only call onCleanup() from inside an effect root.");
    }
}

/**
 * Schedule a function to run when the main loop is next idle.
 */
export function schedule<A>(job: () => A): Promise<A> {
    return new Promise((resolve, reject) => {
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            try {
                resolve(job());
            } catch (err) {
                reject(err);
            }
            return GLib.SOURCE_REMOVE;
        });
    });
}

export function runWithOwner<A>(owner: EffectNode<unknown>, f: () => A): A {
    return runInContext(owner, undefined, f);
}
