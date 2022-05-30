#!/usr/bin/env -S gjs -m

import Adw from "@gx/gi/Gjs/Adw-1.js";
import Gtk from "@gx/gi/Gjs/Gtk-4.0.js";

import { Ef } from "@gx/core";

const VERTICAL = Gtk.Orientation.VERTICAL;
const HORIZONTAL = Gtk.Orientation.HORIZONTAL;

function Counter(properties: { value?: number }) {
    const props: Required<typeof properties> = Object.assign(
        { value: 0 },
        properties
    );
    const counter = Ef.value(props.value);

    Ef.onCleanup(() => console.log("Counter disposed!"));

    return (
        <Gtk.Box gtk:class="linked" orientation={HORIZONTAL}>
            <Gtk.Button
                label="Dec"
                gtk:on={{
                    clicked: () => counter.update((v) => v - 1),
                }}
            />
            <Gtk.Entry editable={false} text={`${counter()}`} />
            <Gtk.Button
                label="Inc"
                gtk:on={{
                    clicked: () => counter.update((v) => v + 1),
                }}
            />
        </Gtk.Box>
    );
}

function Window(props: { application: Adw.Application }) {
    return (
        <Adw.ApplicationWindow
            application={props.application}
            default_width={300}
            default_height={100}
        >
            <Gtk.Box orientation={VERTICAL} hexpand={true}>
                <Adw.HeaderBar>
                    <Adw.WindowTitle gtk:type="title" title="Number Goes Up" />
                </Adw.HeaderBar>
                <Gtk.Box
                    spacing={16}
                    orientation={VERTICAL}
                    margin_bottom={16}
                    margin_top={16}
                    margin_start={16}
                    margin_end={16}
                >
                    <Counter value={0} />
                </Gtk.Box>
            </Gtk.Box>
        </Adw.ApplicationWindow>
    );
}

const app: Adw.Application = (
    <Adw.Application
        application_id="lol.bodil.numbergoesup"
        gtk:on={{
            activate: (app) => {
                const window: Adw.ApplicationWindow = (

                    <Window application={app} />

                ) as Adw.ApplicationWindow;
                window.show();
            },
        }}
    />
) as Adw.Application;

Ef.root(() => app.run(ARGV));
