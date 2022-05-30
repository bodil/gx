import { Gio } from "@gx/gi";

import { MappedPosition, SourceMapConsumer } from "source-map-js";
import { getBorderCharacters, table } from "table";

import * as d from "./display";
import * as FS from "./fs";
import { SourceMaps } from "./sourcemap";

const c = /* @__PURE__ */ d.c;

type AnnotatedPosition = MappedPosition & { origSource?: string };

export const sourceMaps = /* @__PURE__ */ new SourceMaps({});

function parseTraceLine(line: string): MappedPosition {
    const match = /^(.*)@(.*):([0-9]+):([0-9]+)$/.exec(line);
    if (match !== null) {
        return {
            name: match[1].length > 0 ? match[1] : undefined,
            source: match[2],
            line: Number.parseInt(match[3], 10),
            column: Number.parseInt(match[4], 10),
        };
    }
    throw new Error(`Unable to parse trace entry: "${line}"`);
}

function sourceForTrace(line: MappedPosition, sourceMap?: SourceMapConsumer, width = 40): [string] {
    if (sourceMap === undefined) {
        return [""];
    }
    let source: string | null = sourceMap.sourceContentFor(line.source, true);
    if (source === null) {
        const file = Gio.File.new_for_uri(line.source);
        if (!file.query_exists(null)) {
            return [""];
        }
        try {
            const [_, data] = file.load_contents(null);
            source = new TextDecoder().decode(data);
        } catch (e) {
            return [""];
        }
    }
    const sourceLine = source.split("\n")[line.line - 1];
    let printLine = sourceLine.trimStart();
    const trimmed = sourceLine.length - printLine.length;
    printLine = printLine.trim();
    let column = line.column - trimmed;
    const truncated = { left: false, right: false };

    while (printLine.length > width + (truncated.left ? -1 : 0) + (truncated.right ? -1 : 0)) {
        if (column + width / 2 < printLine.length) {
            printLine = printLine.slice(0, printLine.length - 1);
            truncated.right = true;
        } else {
            printLine = printLine.slice(1);
            column -= 1;
            truncated.left = true;
        }
    }

    if (truncated.left) {
        printLine = `…${printLine}`;
        column += 1;
    }
    if (truncated.right) {
        printLine += "…";
    }

    const marker = " ".repeat(column) + c.red("^");
    return [`${printLine}\n${marker}`];
}

function mapLine(line: MappedPosition, sourceMap?: SourceMapConsumer): AnnotatedPosition {
    if (!sourceMap) {
        return line;
    }

    const mapped = sourceMap.originalPositionFor(line);
    if (mapped.source === null) {
        return line;
    }
    const sourceDir = Gio.File.new_for_uri(line.source).get_parent()!;
    const mappedFile = sourceDir.resolve_relative_path(mapped.source);
    const result = {
        name: mapped.name ?? line.name ?? "",
        source: mappedFile.get_uri(),
        origSource: line.source,
        line: mapped.line,
        column: mapped.column,
    };
    return result;
}

export function stackTrace(
    trace: string,
    sourceMaps: SourceMaps,
    filter?: (line: MappedPosition) => boolean
): AnnotatedPosition[] {
    let lines = trace
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .map(parseTraceLine);
    if (filter !== undefined) {
        lines = lines.filter(filter);
    }
    return lines.map((line) => mapLine(line, sourceMaps.loadSourceMap(line.source)));
}

function findFirstLineFor(file: string, trace: AnnotatedPosition[]): number | undefined {
    let index = 0;
    for (const line of trace) {
        if (line.source === file) {
            return index;
        }
        index++;
    }
}

export type PrintStackTraceOptions = {
    fullTrace?: boolean;
    runnerPath?: () => MappedPosition;
    filter?: (line: MappedPosition) => boolean;
};

export function printStackTrace(
    traceString: string,
    file: string | undefined,
    printer: (v: string) => void,
    sourceMaps: SourceMaps,
    options: PrintStackTraceOptions = {}
) {
    const origFile =
        file === undefined ? undefined : sourceMaps.sourceFileFor(file)?.get_uri() ?? file;
    let trace = stackTrace(traceString, sourceMaps, options.filter);
    if (trace.length === 0) {
        return;
    }
    const start =
        options.fullTrace === true || origFile === undefined
            ? 0
            : findFirstLineFor(origFile, trace) ?? 0;
    trace = trace.slice(start);

    let runnerSource = undefined;
    if (options.runnerPath !== undefined) {
        const runnerPos = options.runnerPath();
        const runnerMap = sourceMaps.loadSourceMap(runnerPos.source);
        runnerSource = mapLine(runnerPos, runnerMap).source;
    }

    const rows: string[][] = [];

    for (const line of trace) {
        if (line.source === runnerSource && options.fullTrace !== true) {
            break;
        }
        const row = [
            (origFile === line.source ? c.bold("→") : " ") + c.gray(" at"),
            line.name !== undefined ? c.blue.bold(line.name) : "",
            c.magenta.bold(`${FS.cwdiseFilename(line.source)}`) +
                c.gray(`:${line.line}:${line.column}`),
            ...sourceForTrace(line, sourceMaps.loadSourceMap(line.origSource ?? line.source)),
        ];
        rows.push(row);
    }

    try {
        const output = table(rows, {
            columns: {
                1: { alignment: "right" },
            },
            border: getBorderCharacters("void"),
            columnDefault: { paddingLeft: 0, paddingRight: 1 },
            drawHorizontalLine: () => false,
        });
        printer(output);
    } catch (err) {
        console.error("table rendering failed!", err);
    }
}
