import { Gio, GLib, Gtk, System } from "@gx/gi";

import isCallable from "is-callable";

import { Async, Display } from "@gx/core";
import { MappedPosition } from "@gx/core/sourcemap";

import { Test } from ".";
import { TaskQueue } from "./queue";
import { DidNotThrowError, ErrorDesc, Message, MessageType, TestResult } from "./message";
import { inspect } from "@gx/core/log";

const options = /* @__PURE__ */ {
    jobs: Number.parseInt(GLib.getenv("GXTEST_RUNNER_JOBS") ?? "8", 10),
    failEarly: GLib.getenv("GXTEST_RUNNER_FAIL_EARLY") === "true",
    timeout: Number.parseInt(GLib.getenv("GXTEST_RUNNER_TIMEOUT") ?? "3000", 10),
};

function deduceTestResult(test: Test, threw: Error | undefined): [TestResult, Error | undefined] {
    let success = false;
    // Did the test time out?
    if (threw instanceof Async.TimeoutError) {
        // If the test timed out and we were expecting a timeout exception, that's a success.
        if (test.throws !== undefined && threw instanceof test.throws) {
            return ["ok", threw];
        }
        return ["timeout", threw];
    }
    // Did the test throw an exception?
    if (test.throws !== undefined) {
        // Were we expecting the exception to be thrown?
        if (threw !== undefined && threw instanceof test.throws) {
            success = true;
        } else {
            threw = new DidNotThrowError(test.throws, threw);
        }
    } else if (threw === undefined) {
        // Tests are green, ship it!
        success = true;
    }
    return success ? ["ok", threw] : ["failed", threw];
}

function errorDesc(error: Error): ErrorDesc {
    const desc: ErrorDesc = {
        name: error.name,
        detail: error.message,
        stack: error.stack,
    };
    if (error.cause !== undefined) {
        desc.cause = errorDesc(error.cause);
    }
    const err = error as unknown as Record<string, unknown>;
    if (err.actual !== undefined) {
        desc.actual = inspect(err.actual);
    }
    if (err.expected !== undefined) {
        desc.expected = inspect(err.expected);
    }
    if (typeof err.showDiff === "boolean") {
        desc.showDiff = err.showDiff;
    }
    if (typeof err.operator === "string") {
        desc.operator = err.operator;
    }
    return desc;
}

function send<Type extends keyof MessageType>(message: Message<Type>) {
    Display.outln(JSON.stringify(message));
}

function runAsPromise(
    f: (cancel?: Gio.Cancellable) => void | PromiseLike<void>,
    cancel?: Gio.Cancellable
): Promise<undefined | Error> {
    return new Promise((resolve) => {
        let result;
        try {
            result = f(cancel);
        } catch (err) {
            resolve(err as Error);
            return;
        }
        Promise.resolve(result).then(
            () => resolve(undefined),
            (err: Error) => resolve(err)
        );
    });
}

async function runTests(app: Gtk.Application, exports: Promise<{ [key: string]: unknown }>) {
    app.hold();

    const tests: [string, Test][] = [];
    try {
        const resolvedExports = await exports;
        for (const key in resolvedExports) {
            if (isCallable(resolvedExports[key])) {
                tests.push([key, resolvedExports[key] as Test]);
            }
        }
    } catch (err) {
        send({
            type: "importError",
            error: errorDesc(
                err instanceof Error ? err : new Error(`Unknown error: ${inspect(err)}`)
            ),
        });
        app.quit();
        return;
    }

    send({ type: "prelude", total: tests.length });

    const queue = new TaskQueue({
        jobs: options.jobs,
        cancelOnFail: options.failEarly,
    });

    const runTest = async (name: string, test: Test, cancel?: Gio.Cancellable) => {
        const timeout = test.timeout !== undefined ? test.timeout : options.timeout;
        const threw = await Async.timeout(runAsPromise(test, cancel), timeout, cancel).catch(
            (err: Error) => err
        );
        const [result, error] = deduceTestResult(test, threw);
        switch (result) {
            case "ok":
                send({ type: "ok", name });
                break;
            case "failed":
                send({ type: "failed", name, error: errorDesc(error!) });
                throw error;
            case "timeout":
                send({
                    type: "timeout",
                    name,
                    timeout: (error as Async.TimeoutError).timeout,
                });
                break;
        }
    };

    tests.forEach(([name, test]) => {
        queue.add((cancel) => runTest(name, test, cancel)).catch(() => {});
    });
    await queue.join().catch(() => {});
    app.release();
}

export function runner(exports: Promise<{ [key: string]: unknown }>) {
    const app = new Gtk.Application();
    app.connect("activate", () => {
        runTests(app, exports).catch((err) => console.error("Toplevel exception:", err));
    });
    System.exit(app.run([System.programInvocationName, ...ARGV]));
}

export function runnerPath(): MappedPosition {
    try {
        throw new Error();
    } catch (err) {
        const error = err as Error;
        const line = error.stack!.split("\n")[0];
        const match = /^(.*)@(.*):([0-9]+):([0-9]+)$/.exec(line)!;
        return {
            source: match[2],
            line: Number.parseInt(match[3], 10),
            column: Number.parseInt(match[4], 10),
        };
    }
}
