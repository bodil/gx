import { Gio, GLib, GObject } from "@gx/gi";

import { Disposable, GObj, Async } from "@gx/core";

export type TaskQueueOptions = { jobs: number; cancelOnFail: boolean };

export type Task<A> =
    | ((cancellable?: Gio.Cancellable) => Promise<A>)
    | ((cancellable?: Gio.Cancellable) => A);

type Job = () => Promise<void>;

@GObj.Class
@GObj.Signals({
    "job-started": {},
    "job-done": {},
    "job-failed": {},
    empty: {},
    cancelled: {},
})
export class TaskQueue extends GObject.Object implements Disposable {
    readonly cancellable: Gio.Cancellable = new Gio.Cancellable();
    private readonly options: TaskQueueOptions;
    private queue: Job[] = [];
    private pending = 0;
    private idleSource: number | undefined = undefined;

    constructor(options?: Partial<TaskQueueOptions>) {
        super();
        this.options = {
            jobs: GLib.get_num_processors(),
            cancelOnFail: false,
            ...(options || {}),
        };
        if (this.options.jobs < 1) {
            throw new Error(
                `Job queue cannot have a size of less than 1 (set to ${this.options.jobs}).`
            );
        }
    }

    private trySchedule() {
        if (this.idleSource === undefined && !this.cancellable.is_cancelled()) {
            this.idleSource = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                return this.schedule();
            });
        }
    }

    private jobDone() {
        this.pending--;
        this.trySchedule();
        if (this.pending === 0 && this.queue.length === 0) {
            this.emit("empty");
        }
    }

    private schedule(): boolean {
        while (this.queue.length > 0) {
            if (this.cancellable.is_cancelled() || this.pending >= this.options.jobs) {
                break;
            }
            const job = this.queue.shift()!;
            this.emit("job-started");
            job().catch(() => {});
        }
        this.idleSource = undefined;
        return GLib.SOURCE_REMOVE;
    }

    get runningJobs(): number {
        return this.pending;
    }

    cancel() {
        this.cancellable.cancel();
        this.emit("cancelled");
    }

    join(): Promise<void> {
        if (this.queue.length === 0 && this.pending === 0) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            this.connect("empty", () => resolve());
            this.connect("cancelled", () => reject(new Async.CancelledError()));
        });
    }

    add<A>(task: Task<A>): Promise<A> {
        return new Promise((resolve, reject) => {
            const job = async () => {
                if (this.cancellable.is_cancelled()) {
                    reject(new Async.CancelledError());
                    return;
                }
                this.pending++;
                try {
                    const result = await task(this.cancellable);
                    if (this.cancellable.is_cancelled()) {
                        reject(new Async.CancelledError());
                    } else {
                        resolve(result);
                        this.emit("job-done");
                    }
                } catch (e) {
                    if (this.cancellable.is_cancelled()) {
                        reject(new Async.CancelledError());
                    } else {
                        reject(e);
                        this.emit("job-failed");
                        if (this.options.cancelOnFail) {
                            this.cancel();
                        }
                    }
                }
                this.jobDone();
            };
            this.queue.push(job);
            this.trySchedule();
        });
    }

    dispose() {
        if (this.idleSource !== undefined) {
            GLib.source_remove(this.idleSource);
            this.idleSource = undefined;
        }
        this.cancel();
        this.queue = [];
    }
}
