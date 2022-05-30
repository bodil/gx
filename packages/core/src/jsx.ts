import GObject from "@gx/gi/Gjs/GObject-2.0.js";
import Gtk from "@gx/gi/Gjs/Gtk-4.0";

import * as Ef from "./effect";
import * as GObj from "./gobject";
import { gtypeForObject } from "./gobject";

type AccessibleDescriptor = {
    state?: [Gtk.AccessibleState, any][];
    props?: [Gtk.AccessibleProperty, any][];
    rel?: [Gtk.AccessibleRelation, any][];
};

declare global {
    namespace JSX {
        interface Element extends GObject.Object {}
        interface Signals {
            foo?: string;
        }
        type SignalAttributes = {
            [Key in keyof Signals as `on:${Key}`]?: Signals[Key];
        };
        type IntrinsicClassAttributes<_C extends GObject.Object> = {
            "gtk:id"?: string;
            "gtk:class"?: string | string[];
            "gtk:type"?: string;
            "gtk:layout"?: { [key: string]: any };
            "gtk:accessible"?: AccessibleDescriptor;
            "gtk:on"?: { [key: string]: (...args: any[]) => void };
        };
    }
}

export const jsxGtkMeta = /* @__PURE__ */ Symbol("JSX.Gtk.Meta");

export const builder = /* @__PURE__ */ new Gtk.Builder();

export function applyStyles(obj: GObject.Object, styles: string | string[]) {
    if (!Array.isArray(styles)) {
        styles = [styles];
    }
    const widget = GObj.assertCast(Gtk.Widget, obj);
    for (const style of styles) {
        widget.add_css_class(style);
    }
}

export function applyAccessible(
    obj: GObject.Object,
    desc: AccessibleDescriptor
) {
    const widget = GObj.assertCast(Gtk.Accessible, obj);

    if (desc.state !== undefined) {
        for (const [state, value] of desc.state) {
            const cell = Ef.isCell(value);
            if (cell !== null) {
                Ef.effect(() => widget.update_state([state], [cell()]));
            } else {
                widget.update_state([state], [value]);
            }
        }
    }

    if (desc.props !== undefined) {
        for (const [prop, value] of desc.props) {
            const cell = Ef.isCell(value);
            if (cell !== null) {
                Ef.effect(() => widget.update_property([prop], [cell()]));
            } else {
                widget.update_property([prop], [value]);
            }
        }
    }

    if (desc.rel !== undefined) {
        for (const [rel, value] of desc.rel) {
            const cell = Ef.isCell(value);
            if (cell !== null) {
                Ef.effect(() => widget.update_relation([rel], [cell()]));
            } else {
                widget.update_relation([rel], [value]);
            }
        }
    }
}

export function addChild(parent: Gtk.Buildable, child: GObject.Object) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/strict-boolean-expressions
    const childMeta: { [key: string]: any } = (child as any)[jsxGtkMeta] || {};
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/strict-boolean-expressions
    parent.vfunc_add_child(builder, child, childMeta["type"] || null);
    if (childMeta.layout !== undefined) {
        const parentWidget = GObj.assertCast(Gtk.Widget, parent);
        const childWidget = GObj.assertCast(Gtk.Widget, child);
        const manager = parentWidget.get_layout_manager();
        if (manager !== null) {
            const layout = manager.get_layout_child(childWidget);
            for (const [property, value] of Object.entries(layout)) {
                layout.set_property(property, value);
            }
        } else {
            console.error(
                "Cannot apply layout options to a parent without a layout manager:",
                gtypeForObject(parentWidget).name
            );
        }
    }
}
