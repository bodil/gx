import { GObject } from "@gx/gi";
import { CellType, CellTypeFlags, SignalSpec, WritableCell } from ".";
import { logUpdate, logAccessor, signalForPSpec } from "./context";
import * as GObj from "../gobject";

@GObj.Class
export class CellNode<A> extends GObject.Object implements WritableCell<A> {
    static currentSpec = GObject.ParamSpec.jsobject(
        "current",
        "current",
        "The cell's current value.",
        GObject.ParamFlags.READWRITE
    );

    [CellType]: CellTypeFlags;

    @GObj.Property(CellNode.currentSpec)
    get current(): A {
        return this.get();
    }

    set current(value: A) {
        this.set(value);
    }

    get(): A {
        logAccessor(this.signalSpec, this.name ?? "[Cell]");
        return this.#current;
    }

    set(value: A) {
        if (this.#equals !== undefined && this.#equals(value, this.#current)) {
            return;
        }
        this.#current = value;
        logUpdate(this.name ?? "[Cell]", value);
        this.notify_by_pspec(CellNode.currentSpec);
    }

    name?: string;

    #current: A;
    #equals?: (a: A, b: A) => boolean;

    constructor(value: A, name?: string, equals?: (a: A, b: A) => boolean) {
        super();
        this.name = name;
        this.#current = value;
        this.#equals = equals;
        this[CellType] = CellTypeFlags.Readable | CellTypeFlags.Writable;
    }

    signalSpec: SignalSpec = {
        target: this,
        signal: signalForPSpec(CellNode.currentSpec),
    };

    update(f: (v: A) => A) {
        this.set(f(this.#current));
    }
}
