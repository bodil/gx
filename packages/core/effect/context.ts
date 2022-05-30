import { GObject } from "@gx/gi";
import { SignalSpec } from ".";
import { EffectNode } from "./effectnode";
import { log } from "../log";

let Owner: EffectNode<unknown> | null = null;
let Listener: EffectNode<unknown> | null = null;

const logger = log.scope("gx.effect");

export function signalForProperty(prop: string): string {
    return `notify::${prop}`;
}

export function signalForPSpec(pspec: GObject.ParamSpec | string) {
    return signalForProperty(typeof pspec === "string" ? pspec : pspec.get_name());
}

export function getOwner(): EffectNode<unknown> | null {
    return Owner;
}

export function runInContext<A>(
    owner: EffectNode<unknown> | null | undefined,
    listener: EffectNode<unknown> | null | undefined,
    f: () => A
): A {
    const oldOwner = Owner;
    const oldListener = Listener;
    if (owner !== undefined) {
        Owner = owner;
    }
    if (listener !== undefined) {
        Listener = listener;
    }
    try {
        return f();
    } finally {
        Listener = oldListener;
        Owner = oldOwner;
    }
}

export function logAccessor(signalSpec: SignalSpec, name: string) {
    if (Listener !== null) {
        Listener.log(signalSpec);
        logger.trace("Effect read:", Listener.name, "=>", name);
    }
}

export function registerEffect<A>(node: EffectNode<A>) {
    if (Owner !== null) {
        node.scheduler = Owner.scheduler;
        Owner.addChild(node);
        node.owner = Owner;
    } else {
        throw new Error("Effect was created outside a root. Wrap it in an Ef.root() call.");
    }
}

export function installEffect<A>(effectNode: EffectNode<A>): A {
    registerEffect(effectNode);
    const result = effectNode.run();
    if (!effectNode.hasSideEffects()) {
        getOwner()?.removeChild(effectNode);
    }
    return result;
}

export function logUpdate(name: string, value: any) {
    logger.trace("Cell updated:", name, "=>", value);
}
