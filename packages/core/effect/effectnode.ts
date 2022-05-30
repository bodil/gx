import { GObject } from "@gx/gi";
import { CellType, CellTypeFlags, isCell, ReadableCell, SignalSpec } from ".";
import { Disposable } from "..";
import * as GObj from "../gobject";
import { logUpdate, logAccessor, runInContext, signalForPSpec } from "./context";
import { Scheduler } from "./scheduler";

@GObj.Class
export class EffectNode<A> extends GObject.Object implements ReadableCell<A>, Disposable {
    static currentSpec = GObject.ParamSpec.jsobject(
        "current",
        "current",
        "The effect's current value.",
        GObject.ParamFlags.READABLE
    );

    [CellType]: CellTypeFlags;

    @GObj.Property(EffectNode.currentSpec)
    get current(): A {
        return this.get();
    }

    get(): A {
        logAccessor(this.signalSpec, this.name ?? "[Effect]");
        return this.value!;
    }

    name?: string;

    private effect: () => A;
    private value: A | undefined;
    private dependencies: Map<GObject.Object, Map<string, number>> = new Map();
    private children: Disposable[] = [];
    private cleanups: ((final: boolean) => void)[] = [];
    scheduler: Scheduler = undefined!;
    owner?: EffectNode<unknown>;

    constructor(effect: () => A, name?: string) {
        super();
        this.name = name;
        this.effect = effect;
        this[CellType] = CellTypeFlags.Readable;
    }

    signalSpec: SignalSpec = { target: this, signal: signalForPSpec(EffectNode.currentSpec) };

    addChild(node: Disposable) {
        this.children.push(node);
    }

    removeChild(node: Disposable) {
        if (Object.is(this.children[this.children.length - 1], node)) {
            this.children.pop();
            return;
        }
        const index = this.children.findIndex((child) => Object.is(child, node));
        if (index < 0) {
            throw new Error(
                "EffectNode: inconsistent state: tried to remove a child which wasn't a child."
            );
        }
        this.children.splice(index, 1);
    }

    hasSideEffects(): boolean {
        return this.children.length > 0 || this.dependencies.size > 0 || this.cleanups.length > 0;
    }

    addDependency(signal: ReadableCell<unknown> | SignalSpec) {
        const signalSpec = isCell(signal) ? signal.signalSpec : signal;
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
            const listener =
                signalSpec.detail === undefined
                    ? () => this.scheduleUpdate()
                    : (_: any, detail: any) => {
                          if (detail === signalSpec.detail) {
                              this.scheduleUpdate();
                          }
                      };
            targetMap.set(
                signalSpec.signal,
                signalSpec.target.connect(signalSpec.signal, listener)
            );
        }
    }

    scheduleUpdate() {
        this.scheduler.add(this);
    }

    run(): A {
        return runInContext(this, this, () => {
            this.cleanup(false);
            const result = this.effect();
            this.value = result;
            if (result !== undefined) {
                logUpdate(this.name ?? "[Effect]", result);
            }
            this.notify_by_pspec(EffectNode.currentSpec);
            return result;
        });
    }

    onCleanup(f: (final: boolean) => void) {
        if (this.cleanups === null) {
            this.cleanups = [f];
        } else {
            this.cleanups.push(f);
        }
    }

    cleanup(final: boolean) {
        this.children.forEach((child) => child.dispose());
        this.children = [];
        this.cleanups.forEach((f) => f(final));
        this.cleanups = [];
        this.dependencies.forEach((targetMap, target) =>
            targetMap.forEach((handle) => target.disconnect(handle))
        );
        this.dependencies.clear();
    }

    dispose() {
        this.cleanup(true);
        this.effect = undefined!;
        this.value = undefined!;
        if (this.owner === undefined && this.scheduler !== undefined) {
            this.scheduler.dispose();
            this.scheduler = undefined!;
        }
    }
}
