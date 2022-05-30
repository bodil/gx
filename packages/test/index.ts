import { Gio, GObject } from "@gx/gi";

import { GObj } from "@gx/core";

declare global {
    export namespace Chai {
        interface Assertion {
            implements<C extends GObject.Object>(cls: new (...args: any[]) => C): void;
        }
    }
}

import chai from "chai";
chai.use((chai, _utils) => {
    const Assertion = chai.Assertion;

    Assertion.addMethod("implements", function <
        C extends GObject.Object
    >(cls: new (...args: any[]) => C) {
        // @ts-ignore
        const me = this as typeof Assertion;
        const theirType = GObj.gtypeForConstructor(cls);
        const ourType = GObj.gtypeFor(me._obj);
        me.assert(
            ourType !== undefined && GObject.type_is_a(ourType, theirType),
            "expected #{act} to implement #{exp}",
            "expected #{act} to not implement #{exp}",
            theirType.name,
            ourType!.name,
            false
        );
    });
});

import { expect, assert } from "chai";
export { expect, assert };

export type TestOptions = {
    label?: string;
    timeout?: number;
    throws?: new (...args: any[]) => any;
};

export type TestFunction = (cancellable?: Gio.Cancellable) => void | PromiseLike<void>;

export type Test = TestFunction & TestOptions;

function makeTest(
    testOrOptionsOrLabel: string | TestFunction | TestOptions,
    testOrOptions?: TestFunction | TestOptions,
    test?: TestFunction
): Test {
    let label: string | undefined = undefined;
    let options: TestOptions | undefined = undefined;
    if (typeof testOrOptionsOrLabel === "string") {
        label = testOrOptionsOrLabel;
        if (typeof testOrOptions === "function") {
            test = testOrOptions;
        } else {
            options = testOrOptions;
        }
    } else if (typeof testOrOptionsOrLabel === "function") {
        test = testOrOptionsOrLabel;
    } else {
        options = testOrOptionsOrLabel;
        test = testOrOptions as TestFunction | undefined;
    }
    if (options === undefined) {
        options = {};
    }
    if (label !== undefined) {
        options.label = label;
    }
    if (test === undefined) {
        throw new Error("No test function specified!");
    }
    return Object.assign(test, options);
}

export const test = makeTest;
