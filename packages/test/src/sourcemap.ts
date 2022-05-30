import Gio from "@gx/gi/Gjs/Gio-2.0.js";

import { RawSourceMap, SourceMapConsumer } from "source-map-js";

const textDecoder = new TextDecoder();

export class SourceMaps {
    private map: { [uri: string]: SourceMapConsumer } = {};
    private readonly testMap: Record<string, Gio.File>;

    constructor(testMap: Record<string, Gio.File>) {
        this.testMap = testMap;
    }

    loadSourceMap(uri: string): SourceMapConsumer | undefined {
        if (this.map.uri !== undefined) {
            return this.map[uri];
        }
        const file = Gio.File.new_for_uri(`${uri}.map`);
        if (file.query_exists(null)) {
            const [_, data] = file.load_contents(null);
            const map = JSON.parse(textDecoder.decode(data)) as RawSourceMap;
            this.map[uri] = new SourceMapConsumer(map);
            return this.map[uri];
        }
        return undefined;
    }

    sourceFileFor(fileOrUri: string | Gio.File): Gio.File {
        const uri =
            typeof fileOrUri === "string" ? fileOrUri : fileOrUri.get_uri();
        const file = this.testMap[uri];
        return file === undefined ? Gio.File.new_for_uri(uri) : file;
    }
}
