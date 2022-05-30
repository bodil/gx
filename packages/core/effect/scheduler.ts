import { GLib, GObject } from "@gx/gi";
import { Disposable } from "..";
import { log } from "../log";
import * as GObj from "../gobject";
import { EffectNode } from "./effectnode";

const logger = log.scope("gx.effect");

@GObj.Class
@GObj.Signals({ empty: {}, exception: {} })
export class Scheduler extends GObject.Object implements Disposable {
    #idleSource?: number;
    #jobs: EffectNode<unknown>[] = [];
    #exception?: Error;
    #onException?: (err: Error) => void;

    constructor(options: { onException?: (err: Error) => void } = {}) {
        super();
        this.#onException = options.onException;
    }

    private scheduleTick() {
        if (this.#idleSource !== undefined) {
            return;
        }
        this.#idleSource = GLib.idle_add(GLib.PRIORITY_HIGH_IDLE, () => {
            this.process();
            if (this.#jobs.length > 0) {
                return GLib.SOURCE_CONTINUE;
            }
            this.#idleSource = undefined;
            this.emit("empty");
            return GLib.SOURCE_REMOVE;
        });
    }

    private process() {
        const queue = this.#jobs;
        this.#jobs = [];
        for (const job of queue) {
            try {
                logger.trace("Effect re-run:", job.name);
                job.run();
            } catch (err) {
                this.#exception = err as Error;
                this.emit("exception");
                if (this.#onException) {
                    this.#onException(err as Error);
                }
                break;
            }
        }
    }

    add(job: EffectNode<unknown>) {
        this.#jobs.push(job);
        this.scheduleTick();
    }

    join(): Promise<void> {
        if (this.#jobs.length === 0) {
            return this.#exception === undefined
                ? Promise.resolve()
                : Promise.reject(this.#exception);
        }
        return new Promise((resolve, reject) => {
            this.connect("empty", () => {
                resolve();
            });
            this.connect("exception", () => {
                reject(this.#exception);
            });
        });
    }

    dispose() {
        if (this.#idleSource !== undefined) {
            GLib.source_remove(this.#idleSource);
            this.#idleSource = undefined;
        }
    }
}
