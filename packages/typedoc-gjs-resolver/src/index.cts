import { Application } from "typedoc";

const pkgMap: Record<string, string> = {
    Adw: "adw1",
    cairo: "cairo10",
    Gdk: "gdk40",
    GdkPixbuf: "gdkpixbuf20",
    GLib: "glib20",
    Gio: "gio20",
    GObject: "gobject20",
    Graphene: "graphene10",
    Gsk: "gsk40",
    Gtk: "gtk40",
    Pango: "pango10",
    PangoCairo: "pangocairo10",
};

export function load(app: Application) {
    app.renderer.addUnknownSymbolResolver("@gx/gi", (name) => {
        const parts = name.split(".");
        const pkg = pkgMap[parts[0]];
        const path = parts.map((s) => s.toLowerCase()).join(".");
        if (pkg !== undefined) {
            return `https://gjs-docs.gnome.org/${pkg}/${path}`;
        }
        return undefined;
    });
}
