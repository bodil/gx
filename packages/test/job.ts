import { Gio, GLib, GObject } from "@gx/gi";

import { GObj } from "@gx/core";

function readLine(stream: Gio.DataInputStream, cancel?: Gio.Cancellable): Promise<string | null> {
    return new Promise((resolve, reject) => {
        stream.read_line_async(GLib.PRIORITY_DEFAULT_IDLE, cancel ?? null, (stream, result) => {
            try {
                const [line, _] = stream.read_line_finish_utf8(result);
                resolve(line);
            } catch (err) {
                reject(err);
            }
        });
    });
}

export type TestJobOptions = {
    jobs: number;
    defaultTimeout: number;
    failEarly: boolean;
};

@GObj.Class
@GObj.Signals({
    message: {
        param_types: [GObject.TYPE_STRING],
    },
    exit: { param_types: [GObject.TYPE_INT] },
})
export class TestJob extends GObject.Object {
    readonly path: Gio.File;
    readonly launcher: Gio.SubprocessLauncher;

    constructor(path: Gio.File, options: TestJobOptions) {
        super();
        this.path = path;
        this.launcher = new Gio.SubprocessLauncher({
            flags: Gio.SubprocessFlags.STDOUT_PIPE,
        });
        this.launcher.setenv("GXTEST_RUNNER_JOBS", `${options.jobs}`, true);
        this.launcher.setenv("GXTEST_RUNNER_TIMEOUT", `${options.defaultTimeout}`, true);
        this.launcher.setenv(
            "GXTEST_RUNNER_FAIL_EARLY",
            `${options.failEarly ? "true" : "false"}`,
            true
        );
    }

    start(cancel?: Gio.Cancellable): Promise<number> {
        return new Promise((resolve, reject) => {
            if (cancel !== undefined && cancel.is_cancelled()) {
                reject(new Error("Job cancelled before it even started"));
                return;
            }
            const process = this.launcher.spawnv([this.path.get_path()!]);
            if (cancel !== undefined) {
                (cancel as any).connect(() => process?.force_exit());
            }
            process.wait_check_async(cancel ?? null, (process, asyncResult) => {
                try {
                    process.wait_check_finish(asyncResult);
                    const status = process.get_exit_status();
                    resolve(status);
                    this.emit("exit", status);
                } catch (err) {
                    reject(err);
                }
            });

            const stream = new Gio.DataInputStream({
                base_stream: process.get_stdout_pipe(),
                close_base_stream: true,
            });

            const readLines = async () => {
                while (stream !== undefined && (cancel === undefined || !cancel.is_cancelled())) {
                    const line = await readLine(stream);
                    if (line === null) {
                        return;
                    }
                    this.emit("message", line);
                }
            };
            readLines().catch((err) => console.error(err));
        });
    }
}
