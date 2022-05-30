import { Gio } from "@gx/gi";

import { RawSourceMap, SourceMapConsumer, MappedPosition } from "source-map-js";

export { MappedPosition };

const textDecoder = /* @__PURE__ */ new TextDecoder();

export class SourceMaps {
    private map: { [uri: string]: SourceMapConsumer } = {};
    private readonly sourceFileMap: Record<string, Gio.File>;

    constructor(sourceFileMap: Record<string, Gio.File>) {
        this.sourceFileMap = sourceFileMap;
    }

    loadSourceMap(uri: string): SourceMapConsumer | undefined {
        if (this.map[uri] !== undefined) {
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
        const uri = typeof fileOrUri === "string" ? fileOrUri : fileOrUri.get_uri();
        const file = this.sourceFileMap[uri];
        return file === undefined ? Gio.File.new_for_uri(uri) : file;
    }
}
