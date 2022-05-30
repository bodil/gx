#!/usr/bin/env -S gjs -m

import { GLib, Gio, Gtk, System } from "@gx/gi";

import { Async, GObj } from "@gx/core";

import * as loader from "./loader";
import { TaskQueue } from "./queue.js";
import { TestJob } from "./job.js";
import { TestReporter } from "./reporter.js";

@GObj.Class
class TestApp extends Gtk.Application {
    failEarly = false;
    fullTrace = false;
    jobs: number = GLib.get_num_processors();
    defaultTimeout = 3000;

    constructor() {
        super({
            application_id: "lol.bodil.gx.TestRunner",
            flags: Gio.ApplicationFlags.HANDLES_OPEN,
        });
        this.add_main_option(
            "fail-early",
            "f".charCodeAt(0),
            GLib.OptionFlags.NONE,
            GLib.OptionArg.NONE,
            "Stop testing immediately when a test fails",
            null
        );
        this.add_main_option(
            "full-trace",
            "l".charCodeAt(0),
            GLib.OptionFlags.NONE,
            GLib.OptionArg.NONE,
            "Include the full trace rather than filtering it for relevance",
            null
        );
        this.add_main_option(
            "jobs",
            "j".charCodeAt(0),
            GLib.OptionFlags.NONE,
            GLib.OptionArg.INT,
            `Number of tests to run in parallel [default: ${this.jobs}]`,
            "number"
        );
        this.add_main_option(
            "timeout",
            "t".charCodeAt(0),
            GLib.OptionFlags.NONE,
            GLib.OptionArg.INT,
            `Time in milliseconds before a test automatically fails [default: ${this.defaultTimeout}]`,
            "ms"
        );
        GLib.set_application_name("Gx Test Harness");
    }

    vfunc_handle_local_options(options: GLib.VariantDict): number {
        if (options.contains("fail-early")) {
            this.failEarly = true;
        }
        if (options.contains("full-trace")) {
            this.fullTrace = true;
        }
        if (options.contains("jobs")) {
            this.jobs = options.lookup_value("jobs", GLib.VariantType.new("i")).get_int32();
        }
        if (options.contains("timeout")) {
            this.defaultTimeout = options
                .lookup_value("timeout", GLib.VariantType.new("i"))
                .get_int32();
        }
        return -1;
    }

    async vfunc_open(files: Gio.File[], _hint: string) {
        const testMap = loader.compileTests(files);
        const testFiles = Object.keys(testMap).map((uri) => Gio.File.new_for_uri(uri));

        const queue = new TaskQueue({
            jobs: this.jobs,
            cancelOnFail: this.failEarly,
        });

        const reporter = new TestReporter(queue.cancellable, testMap, {
            fullTrace: this.fullTrace,
        });

        testFiles.forEach((file) => {
            const job = new TestJob(file, {
                jobs: this.jobs,
                failEarly: this.failEarly,
                defaultTimeout: this.defaultTimeout,
            });
            reporter.listen(job);
            queue
                .add((cancel) => job.start(cancel))
                .catch((err: Error) => {
                    if (!(err instanceof Async.CancelledError)) {
                        console.error("Unhandled exception from queue:", err);
                    }
                });
        });
        await queue.join();

        if (!queue.cancellable.is_cancelled()) {
            reporter.summarise();
        }

        // loader.cleanup();
        this.release();
    }
}

const app = new TestApp();
app.hold();
app.run([System.programInvocationName, ...ARGV]);
