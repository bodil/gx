import { Gio } from "@gx/gi";

import c from "ansi-colors";
c.enabled = true;
export { c };

const textEncoder = /* @__PURE__ */ new TextEncoder();

export const stdout = /* @__PURE__ */ new Gio.UnixOutputStream({ fd: 1 });
export const stderr = /* @__PURE__ */ new Gio.UnixOutputStream({ fd: 2 });

export function write(stream: Gio.OutputStream, s: string) {
    const data = textEncoder.encode(s);
    stream.write(data, null);
}

export function out(s?: string) {
    if (s !== undefined) {
        write(stdout, s);
    }
}

export function outln(s?: string) {
    out(`${s ?? ""}\n`);
}

export function err(s?: string) {
    if (s !== undefined) {
        write(stderr, s);
    }
}

export function errln(s?: string) {
    err(`${s ?? ""}\n`);
}
