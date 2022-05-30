import * as JSX from "./jsx";
import * as Ef from "./effect";
import * as FS from "./fs";
import * as Display from "./display";
import * as GObj from "./gobject";
import * as Async from "./async";
import { log as Log } from "./log";

export { Async, Ef, FS, Display, JSX, GObj, Log };

export interface Disposable {
    dispose(): void;
}

import { Gdk, Gio, Gtk } from "@gx/gi";

export function useCSS(
    path: string | Uint8Array | Gio.File,
    priority = Gtk.STYLE_PROVIDER_PRIORITY_USER
) {
    const css = new Gtk.CssProvider();
    if (GObj.isA(Gio.File, path)) {
        css.load_from_file(path);
    } else {
        const data = path instanceof Uint8Array ? path : new TextEncoder().encode(path);
        css.load_from_data(data);
    }

    const display = Gdk.Display.get_default();
    if (display === null) {
        throw new Error(
            "Can't load a CSS style sheet before there's an active display; load it in your app object's activate callback."
        );
    }

    Gtk.StyleContext.add_provider_for_display(display, css, priority);
}

export function logException(e: Error): void {
    console.error(Display.c.redBright("ERROR:"), e.toString());
}

export function isIterable(a: any): a is Iterable<unknown> {
    return Symbol.iterator in a;
}
