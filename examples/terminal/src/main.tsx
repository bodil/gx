#!/usr/bin/env -S gjs -m

import { Adw, GLib, Gtk, Vte } from "@gx/gi";

import { Ef, useCSS } from "@gx/core";

declare global {
    export function require(path: string): { default: Uint8Array };
}

const VERTICAL = Gtk.Orientation.VERTICAL;

function Terminal(props?: Vte.Terminal.ConstructorProperties): Vte.Terminal {
    const terminal = new Vte.Terminal({ ...props, hexpand: true, vexpand: true });
    terminal.spawn_async(
        Vte.PtyFlags.DEFAULT,
        null,
        ["/usr/bin/fish"],
        [],
        GLib.SpawnFlags.DEFAULT,
        () => {},
        -1,
        // @ts-ignore
        null,
        // @ts-ignore
        () => {}
    );
    return terminal;
}

function Window(props: { application: Adw.Application }) {
    const terminals = Ef.cell([Terminal()]);
    const stack = Ef.ref<Adw.ViewStack>();
    Ef.effect(() => {
        if (stack.get() !== undefined) {
            terminals.get().forEach((child, index) => {
                stack.get()!.add_titled(child, `term_${index}`, `Terminal ${index}`);
                Ef.onCleanup(() => {
                    stack.get()!.remove(child);
                });
            });
        }
    });
    return (
        <Adw.ApplicationWindow
            application={props.application}
            default_width={800}
            default_height={600}
        >
            <Gtk.Box orientation={VERTICAL} hexpand={true} vexpand={true}>
                <Adw.HeaderBar>
                    <Gtk.Button
                        gtk:type="start"
                        gtk:class="circular"
                        icon_name="tab-new"
                        gtk:on={{
                            clicked: () => {
                                const newTerm = Terminal();
                                terminals.update((terms) => [...terms, newTerm]);
                                void Ef.schedule(() => stack.get()?.set_visible_child(newTerm));
                            },
                        }}
                    ></Gtk.Button>
                    <Adw.ViewSwitcherTitle
                        gtk:id="title"
                        gtk:type="title"
                        title="Terminal"
                        stack={stack.get()}
                    />
                </Adw.HeaderBar>
                <Adw.ViewStack gtk:ref={stack} />
                <Adw.ViewSwitcherBar stack={stack.get()} />
            </Gtk.Box>
        </Adw.ApplicationWindow>
    );
}

const app: Adw.Application = (
    <Adw.Application
        application_id="lol.bodil.Gx.Terminal"
        gtk:on={{
            activate: (app) => {
                useCSS(require("./main.css").default);
                const window: Adw.ApplicationWindow = (
                    <Window application={app} />
                ) as Adw.ApplicationWindow;
                window.show();
            },
        }}
    />
) as Adw.Application;

await Ef.root(() => app.run(ARGV));
