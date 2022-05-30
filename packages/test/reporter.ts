import { Gio } from "@gx/gi";

import { createPatch, diffJson, diffWordsWithSpace } from "diff";

import { FS, Display } from "@gx/core";
const c = Display.c;
import { SourceMaps } from "@gx/core/sourcemap";
import { printStackTrace } from "@gx/core/stack";

import { TestJob } from "./job";
import { ErrorDesc, Message, MessageType, TestResult } from "./message";
import { runnerPath } from "./runner";
import { inspect } from "@gx/core/log";

export type TestReporterOptions = { fullTrace: boolean };

export class TestReporter {
    options: TestReporterOptions;
    cancellable: Gio.Cancellable;

    total = {
        ok: 0,
        failed: 0,
        timeout: 0,
    };
    expected = 0;

    failed: [Gio.File, string, ErrorDesc][] = [];
    timeout: [Gio.File, string, number][] = [];

    sourceMaps: SourceMaps;

    mappedPath: { [key: string]: string } = {};

    constructor(
        cancel: Gio.Cancellable,
        testMap: Record<string, Gio.File>,
        options: Partial<TestReporterOptions> = {}
    ) {
        this.cancellable = cancel;
        this.sourceMaps = new SourceMaps(testMap);
        this.options = { fullTrace: false, ...options };
    }

    listen(job: TestJob) {
        job.connect("message", (job: TestJob, data: string) => this.parseMessage(job.path, data));
    }

    parseMessage(file: Gio.File, data: string): void {
        const message = JSON.parse(data) as Record<string, unknown>;
        switch (message.type as keyof MessageType) {
            case "importError":
                this.onImportError(file, message as Message<"importError">);
                break;
            case "prelude":
                this.onPrelude(file, message as Message<"prelude">);
                break;
            case "ok":
                this.onOk(file, message as Message<"ok">);
                break;
            case "failed":
                this.onFailed(file, message as Message<"failed">);
                break;
            case "timeout":
                this.onTimeout(file, message as Message<"timeout">);
                break;
            default:
                throw new Error(`Unexpected message type: ${inspect(message.type)}`);
        }
    }

    onImportError(file: Gio.File, message: Message<"importError">) {
        Display.outln(
            `${c.redBright.bold("ERROR:")} Exception while loading file ${c.bold(
                this.mapPath(file)
            )}:`
        );
        this.printException(message.error);
        this.cancellable.cancel();
    }

    onPrelude(file: Gio.File, message: Message<"prelude">) {
        this.expected += message.total;
    }

    onOk(file: Gio.File, message: Message<"ok">) {
        this.total.ok += 1;
        this.expected -= 1;
        this.printTestResult(file, message.name, message.type);
    }

    onFailed(file: Gio.File, message: Message<"failed">) {
        this.total.failed += 1;
        this.expected -= 1;
        this.failed.push([file, message.name, message.error]);
        this.printTestResult(file, message.name, message.type);
    }

    onTimeout(file: Gio.File, message: Message<"timeout">) {
        this.total.timeout += 1;
        this.expected -= 1;
        this.timeout.push([file, message.name, message.timeout]);
        this.printTestResult(file, message.name, message.type);
    }

    mapPath(file: Gio.File): string {
        const cached = this.mappedPath[file.get_uri()];
        if (cached !== undefined) {
            return cached;
        }
        const path = FS.cwdiseFilename(this.sourceMaps.sourceFileFor(file.get_uri()));
        this.mappedPath[file.get_uri()] = path;
        return path;
    }

    testDisplayName(file: Gio.File, name: string): string {
        return `${this.mapPath(file)}${c.gray("::")}${name}`;
    }

    printTestResult(file: Gio.File, name: string, result: TestResult) {
        const theme = {
            ok: c.greenBright,
            failed: c.redBright,
            timeout: c.yellow,
            skipped: c.gray,
        };
        Display.outln(
            `${this.testDisplayName(file, name)}: ${theme[result](result.toUpperCase())}`
        );
    }

    printException(err: ErrorDesc, file?: Gio.File) {
        Display.outln(`${c.magentaBright.bold(err.name)}: ${err.detail}`);
        if (err.actual !== undefined && err.expected !== undefined && err.showDiff === true) {
            Display.outln(
                inlineDiff(err.actual, err.expected, {
                    diffAdded: c.bgGreen.bold,
                    diffRemoved: c.bgRed.bold,
                })
            );
        }
        if (err.stack !== undefined) {
            printStackTrace(err.stack, file?.get_uri(), Display.out, this.sourceMaps, {
                fullTrace: this.options.fullTrace,
                runnerPath,
                filter: (line) => line.source !== import.meta.url,
            });
        }
        if (err.cause !== undefined) {
            Display.outln(`${c.cyan.bold("Caused by:")}\n`);
            this.printException(err.cause, file);
        }
    }

    summarise() {
        Display.outln(
            `\nResult: ${
                this.total.failed > 0 ? c.red.bold("FAILED") : c.green.bold("OK")
            }. Passed: ${c.bold(`${this.total.ok}`)}. Failed: ${c.bold(
                `${this.total.failed}`
            )}. Timed out: ${c.bold(`${this.total.timeout}`)}. Skipped: ${c.bold(
                `${this.expected}`
            )}.\n`
        );

        if (this.timeout.length > 0) {
            Display.outln(c.yellow.bold("TIMED OUT:"));
            for (const [file, name, timeout] of this.timeout) {
                Display.outln(`  ${this.testDisplayName(file, name)}: ${timeout} ms`);
            }
            Display.outln();
        }

        for (const [file, name, err] of this.failed) {
            Display.outln(c.bold(`${c.red("FAILED:")} ${this.testDisplayName(file, name)}`));
            this.printException(err, file);
        }
    }
}

type Theme = {
    diffAdded: (s: string) => string;
    diffRemoved: (s: string) => string;
};

function inlineDiff(actual: string, expected: string, theme: Theme): string {
    let msg = errorDiff(actual, expected, theme);

    const lines = msg.split("\n");
    if (lines.length > 4) {
        const width = String(lines.length).length;
        msg = lines
            .map((str: string, i: number) => {
                return `${`${i + 1}`.padStart(width, " ")} | ${str}`;
            })
            .join("\n");
    }

    msg = `\n    ${theme.diffRemoved("actual")} ${theme.diffAdded("expected")}\n\n${msg.replace(
        /^/gm,
        "    "
    )}\n`;

    return msg;
}

function errorDiff(actual: string, expected: string, theme: Theme): string {
    const diffed =
        actual.startsWith("{") || (actual.startsWith("[") && actual.includes("\n"))
            ? diffJson(actual, expected)
            : diffWordsWithSpace(actual, expected);
    return diffed
        .map((change) => {
            if (change.added === true) {
                return theme.diffAdded(change.value);
            }
            if (change.removed === true) {
                return theme.diffRemoved(change.value);
            }
            return change.value;
        })
        .join("");
}

function _unifiedDiff(actual: string, expected: string, theme: Theme): string {
    const indent = "    ";
    function cleanUp(line: string): string {
        if (line.length === 0) {
            return "";
        }
        if (line.startsWith("+")) {
            return indent + theme.diffAdded(line);
        }
        if (line.startsWith("-")) {
            return indent + theme.diffRemoved(line);
        }
        if (/@@/.exec(line)) {
            return "";
        }
        if (/\\ No newline/.exec(line)) {
            return "";
        }
        return indent + line;
    }
    function notBlank(line: string): boolean {
        return typeof line !== "undefined" && line !== null;
    }
    const msg = createPatch("string", actual, expected);
    const lines = msg.split("\n").splice(4);
    return `\n${indent}${theme.diffAdded("+ expected")} ${theme.diffRemoved("- actual")}\n\n${lines
        .map(cleanUp)
        .filter(notBlank)
        .join("\n")}`;
}
