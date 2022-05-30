import { prettyPrint } from "@base2/pretty-print-object";

import * as FS from "./fs";
import * as Stack from "./stack";
import * as d from "./display";
import { GLib } from "@gx/gi";

export enum LogLevel {
    Error = "error",
    Warn = "warn",
    Info = "info",
    Debug = "debug",
    Trace = "trace",
}

const order = [LogLevel.Error, LogLevel.Warn, LogLevel.Info, LogLevel.Debug, LogLevel.Trace];

function compareLevels(a: LogLevel, b: LogLevel): number {
    return order.indexOf(b) - order.indexOf(a);
}

export type LogMethods = { [key in LogLevel]: (...msg: any[]) => void };

export interface Logger extends LogMethods {
    level: LogLevel;
    readonly path: string;
    scope(path: string): Logger;
}

class LoggerInstance {
    #level: LogLevel | undefined;
    #parent: LoggerInstance | undefined;
    #path: string | undefined;
    #children: Record<string, Logger> = {};

    constructor(parent: LoggerInstance | undefined, path: string | undefined) {
        this.#parent = parent;
        if (parent !== undefined && parent.path !== undefined && path !== undefined) {
            this.#path = `${parent.path}.${path}`;
        } else {
            this.#path = path;
        }
    }

    get level(): LogLevel {
        return this.#level ?? this.#parent?.level ?? LogLevel.Warn;
    }

    set level(level: LogLevel) {
        this.#level = level;
    }

    get path(): string | undefined {
        return this.#path;
    }

    scope(path: string): Logger {
        const dot = path.indexOf(".");
        if (dot >= 0) {
            const prefix = path.slice(0, dot);
            const remainder = path.slice(dot + 1);
            return this.scope(prefix).scope(remainder);
        }
        let child = this.#children[path];
        if (child !== undefined) {
            return child;
        }
        child = extendLogger(new LoggerInstance(this, path));
        this.#children[path] = child;
        return child;
    }
}

const inspectConfig = { indent: "    ", singleQuotes: false, inlineCharacterLimit: 32 };
export const inspect = (v: any) => prettyPrint(v, inspectConfig);

export function time<A>(f: () => A, options: { name?: string } = {}): A {
    const start = GLib.get_monotonic_time();
    const result = f();
    const end = GLib.get_monotonic_time();
    d.errln(`Timer: ${options.name ?? "[Function]"} took ${end - start}µs`);
    return result;
}

function renderLogLevel(level: LogLevel, levelString?: string): string {
    const theme: { [level in LogLevel]: (s: string) => string } = {
        [LogLevel.Error]: d.c.bgRedBright,
        [LogLevel.Warn]: d.c.bgYellow,
        [LogLevel.Info]: d.c.bgGreenBright,
        [LogLevel.Debug]: d.c.bgCyan,
        [LogLevel.Trace]: d.c.bgBlue,
    };
    return (
        " ".repeat(5 - level.length) + theme[level](d.c.bold(levelString ?? level.toUpperCase()))
    );
}

function stackTrace() {
    try {
        throw new Error();
    } catch (err) {
        const error = err as Error;
        const stack = Stack.stackTrace(error.stack!, Stack.sourceMaps);
        return stack;
    }
}

function doLog(logger: LoggerInstance, level: LogLevel, msg: any[]) {
    if (compareLevels(logger.level, level) > 0) {
        return;
    }
    const stack = stackTrace();
    const frame = stack[3];
    const fileName = FS.cwdiseFilename(frame.source);
    const { line, column } = frame;
    d.errln(
        `${renderLogLevel(level, ` ${level.toUpperCase()} `)}${
            logger.path === undefined ? "" : d.c.bgBlackBright(` ${logger.path} `)
        } ${d.c.magentaBright(`${fileName}:${line}:${column}:`)} ${msg
            .map((item) => (typeof item === "string" ? item : inspect(item)))
            .join(" ")}`
    );
}

function logFactory(logger: LoggerInstance, level: LogLevel) {
    return (...msg: any[]) => doLog(logger, level, msg);
}

function extendLogger(obj: LoggerInstance): Logger {
    const logger = obj as unknown as Logger;
    for (const level of order) {
        logger[level] = logFactory(obj, level);
    }
    return logger;
}

export const log = extendLogger(new LoggerInstance(undefined, undefined));
