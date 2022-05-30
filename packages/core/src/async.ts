import Gio from "@gx/gi/Gjs/Gio-2.0.js";
import GLib from "@gx/gi/Gjs/GLib-2.0.js";

export class TimeoutError extends Error {
    timeout: number;

    constructor(message: string, milliseconds: number) {
        super(message);
        this.name = "TimeoutError";
        this.timeout = milliseconds;
    }
}

export class CancelledError extends Error {
    constructor() {
        super("The task was cancelled.");
    }
}

export function timeout<A>(
    promise: Promise<A>,
    milliseconds: number,
    cancellable?: Gio.Cancellable
): Promise<A> {
    let timer: number | undefined = undefined;

    const timeoutPromise: Promise<A> = new Promise((resolve, reject) => {
        if (milliseconds === Number.POSITIVE_INFINITY) {
            resolve(promise);
            return;
        }

        if (cancellable !== undefined) {
            if (cancellable.is_cancelled()) {
                reject(new CancelledError());
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            (cancellable as any).connect(() => {
                if (timer !== undefined) {
                    GLib.source_remove(timer);
                    timer = undefined;
                }
                reject(new CancelledError());
            });
        }

        timer = GLib.timeout_add(GLib.PRIORITY_DEFAULT, milliseconds, () => {
            timer = undefined;
            reject(
                new TimeoutError(
                    `Promise timed out after ${milliseconds} milliseconds`,
                    milliseconds
                )
            );
            return GLib.SOURCE_REMOVE;
        });

        promise
            .then((result) => resolve(result))
            .catch((error) => reject(error))
            .finally(() => {
                if (timer !== undefined) {
                    GLib.source_remove(timer);
                    timer = undefined;
                }
            });
    });

    return timeoutPromise;
}
