import { GObject, Gtk } from "@gx/gi";

import * as Ef from "./effect";
import * as GObj from "./gobject";

declare global {
    namespace JSX {
        interface Element extends GObject.Object {}
        type IntrinsicClassAttributes<_C extends GObject.Object> = {
            "gtk:id"?: string;
            "gtk:class"?: (string | null | undefined) | (string | null | undefined)[];
            "gtk:type"?: string;
            "gtk:layout"?: { [key: string]: any };
            "gtk:accessible"?: AccessibleDescriptor;
            "gtk:on"?: { [key: string]: (...args: any[]) => void };
            "gtk:ref"?: Ef.WritableCell<Element | undefined>;
        };
    }
}

export function For<A, B extends JSX.Element>(props: {
    each: Ef.ReadableCell<A[]>;
    children: (item: A, index: Ef.ReadableCell<number>) => B;
}) {
    return Ef.mapArray(props.each, props.children);
}

export type AccessibleDescriptor = {
    state?: [Gtk.AccessibleState, any][];
    props?: [Gtk.AccessibleProperty, any][];
    rel?: [Gtk.AccessibleRelation, any][];
};

/** @internal */
export const jsxGtkMeta = /* @__PURE__ */ Symbol("JSX.Gtk.Meta");

/** @internal */
const jsxInternal = /* @__PURE__ */ Symbol("JSX.Gtk.Internal");

/** @internal */
export const builder = /* @__PURE__ */ new Gtk.Builder();

function withInternal<A extends GObject.Object>(obj: A): A & { [jsxInternal]: InternalState } {
    let internal: InternalState | undefined = (obj as any)[jsxInternal];
    if (internal === undefined) {
        internal = new InternalState();
        (obj as any)[jsxInternal] = internal;
    }
    const name = GObj.gtypeForObject(obj).name;
    (obj as any).$uuid = `${name}#${internal.uuid}`;
    return obj as A & { [jsxInternal]: InternalState };
}

let uuid = 1;

class InternalState {
    uuid = uuid++;
    cssDefaults?: Set<string>;
    children?: Gtk.Widget[];
    startChild?: Gtk.Widget | null;
}

export function getElementById(id: string): JSX.Element | undefined {
    return builder.get_object(id) || undefined;
}

/** @internal */
export function construct(
    constructor: (new (props: Record<string, unknown>) => JSX.Element) | (() => JSX.Element),
    staticProps: Record<string, unknown>,
    cellProps: Record<string, () => unknown>
): JSX.Element {
    if (GObj.isConstructor(GObject.Object, constructor)) {
        const props = { ...staticProps };
        // eslint-disable-next-line prefer-const
        let obj: GObject.Object;
        for (const [prop, effect] of Object.entries(cellProps)) {
            props[prop] = Ef.effect(
                () => {
                    const result = effect();
                    const oldValue: unknown = (obj as any)[prop];
                    if (!Object.is(oldValue, result)) {
                        obj.set_property(prop, result);
                    }
                    return result;
                },
                {
                    name: `${(constructor as any).$gtype.name as string}.${prop}`,
                    initial: () => effect(),
                }
            );
        }
        obj = new constructor(props);
        console.log("Constructed:", logId(obj));
        return obj;
    }

    const props = Ef.object({ ...staticProps }, { name: constructor.name });
    for (const [prop, effect] of Object.entries(cellProps)) {
        props[prop] = Ef.effect(
            () => {
                const result = effect();
                props[prop] = result;
                return result;
            },
            {
                name: `${constructor.name}.${prop}`,
                initial: () => effect(),
            }
        );
    }
    return (constructor as (props: Record<string, unknown>) => JSX.Element)(props);
}

/** @internal */
export function applyStyleClasses(
    obj: GObject.Object,
    styleClasses: string | undefined | null | (string | undefined | null)[]
) {
    const widget = withInternal(GObj.assertCast(Gtk.Widget, obj));
    const current = new Set(widget.get_css_classes());
    if (widget[jsxInternal].cssDefaults === undefined) {
        widget[jsxInternal].cssDefaults = new Set(widget.get_css_classes());
    }
    const defaults = widget[jsxInternal].cssDefaults;
    const target = new Set(
        (Array.isArray(styleClasses) ? styleClasses : [styleClasses]).filter(
            (c) => typeof c === "string" && c.length > 0
        )
    ) as Set<string>;
    for (const c of target) {
        if (!current.delete(c)) {
            widget.add_css_class(c);
        }
    }
    for (const c of current) {
        if (!defaults.has(c)) {
            widget.remove_css_class(c);
        }
    }
}

/** @internal */
export function applyAccessible(obj: GObject.Object, desc: AccessibleDescriptor) {
    const widget = GObj.assertCast(Gtk.Accessible, obj);

    if (desc.state !== undefined) {
        for (const [state, value] of desc.state) {
            if (Ef.isCell(value)) {
                Ef.effect(() => widget.update_state([state], [value.get()]));
            } else {
                widget.update_state([state], [value]);
            }
        }
    }

    if (desc.props !== undefined) {
        for (const [prop, value] of desc.props) {
            if (Ef.isCell(value)) {
                Ef.effect(() => widget.update_property([prop], [value.get()]));
            } else {
                widget.update_property([prop], [value]);
            }
        }
    }

    if (desc.rel !== undefined) {
        for (const [rel, value] of desc.rel) {
            if (Ef.isCell(value)) {
                Ef.effect(() => widget.update_relation([rel], [value.get()]));
            } else {
                widget.update_relation([rel], [value]);
            }
        }
    }
}

export enum MoveType {
    Remove,
    Insert,
}

export type Move<A> =
    | { type: MoveType.Remove; item: A }
    | { type: MoveType.Insert; item: A; after: A | null };

/** @internal */
// This is an adaptation of https://github.com/livoras/list-diff, simplified
// considerably because Gtk.Widgets contain a lot of structural state we can
// utilise.
export function diff<A>(oldList: A[], newList: A[]) {
    const oldIndex = new Set(oldList);
    const newIndex = new Set(newList);
    const moves: Move<A>[] = [];
    const simulateList: A[] = [];

    function insert(index: number, item: A) {
        moves.push({ type: MoveType.Insert, after: newList[index - 1] ?? null, item });
    }

    oldList.forEach((item) => {
        if (newIndex.has(item)) {
            simulateList.push(item);
        } else {
            moves.push({ type: MoveType.Remove, item });
        }
    });

    for (let i = 0, j = 0; i < newList.length; i++) {
        const item = newList[i];
        const simulateItem = simulateList[j];
        if (Object.is(item, simulateItem)) {
            j++;
        } else if (!oldIndex.has(item)) {
            insert(i, item);
        } else {
            const nextItem = simulateList[j + 1];
            if (Object.is(nextItem, item)) {
                simulateList.splice(j, 1);
                j++;
            } else {
                insert(i, item);
            }
        }
    }

    return moves;
}

function logId(obj: GObject.Object): string {
    const name = GObj.gtypeForObject(obj).name;
    const uuid = withInternal(obj)[jsxInternal].uuid;
    return `${name}#${uuid}`;
}

/** @internal */
export function syncChildren(parentWidget: Gtk.Widget, children: Iterable<Gtk.Widget>) {
    const parent = withInternal(parentWidget);
    const newChildren: Gtk.Widget[] = Array.from(children);
    let oldChildren: Gtk.Widget[] | undefined = parent[jsxInternal].children;
    if (oldChildren === undefined) {
        oldChildren = [];
        parent[jsxInternal].startChild = parent.get_last_child();
    }
    const startChild = parent[jsxInternal].startChild as Gtk.Widget | null;
    const oldChildSet = new Set(oldChildren);

    if (oldChildren.length === 0) {
        // Simple case: no children currently, add the new ones directly.
        for (const child of newChildren) {
            addChild(parent, child);
        }
    } else if (newChildren.length === 0) {
        // Another simple case: new child list is empty, remove current children.
        removeChildren(parent, oldChildren);
    } else {
        const moves = diff(oldChildren, newChildren);
        console.log("syncChildren: diffin", moves);
        for (const move of moves) {
            switch (move.type) {
                case MoveType.Remove:
                    removeChild(parent, move.item);
                    break;
                case MoveType.Insert:
                    if (!oldChildSet.has(move.item)) {
                        addChild(parent, move.item);
                    }
                    move.item.insert_after(parent, move.after === null ? startChild : move.after);
                    break;
            }
        }
    }
    parent[jsxInternal].children = newChildren;
}

/** @internal */
export function addChild(parent: Gtk.Buildable, child: GObject.Object) {
    const childMeta: { [key: string]: any } = (child as any)[jsxGtkMeta] ?? {};
    console.log("Adding child:", logId(child));
    parent.vfunc_add_child(builder, child, childMeta["type"] ?? null);
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
                GObj.gtypeForObject(parentWidget).name
            );
        }
    }
}

/** @internal */
export function removeChildren(parent: Gtk.Buildable, children: Iterable<GObject.Object>) {
    for (const child of children) {
        removeChild(parent, child);
    }
}

function removeChild(parent: Gtk.Buildable, child: GObject.Object) {
    console.log("Unparenting child:", logId(child));
    if (typeof (parent as any).remove === "function") {
        (parent as any).remove(child);
    } else if (GObj.isA(Gtk.Widget, child)) {
        child.unparent();
    } else {
        const childType = GObj.gtypeForObject(child).name;
        const parentType = GObj.gtypeForObject(parent).name;
        throw new Error(
            `Can't figure out how to remove child of type ${childType} from parent of type ${parentType}`
        );
    }
}
