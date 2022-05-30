#!/usr/bin/env -S gjs -m

import { Adw, Gdk, GdkPixbuf, Gio, GLib, Gtk } from "@gx/gi";

import { Ef, useCSS } from "@gx/core";
import { Dog, Imgur } from "./imgur";

declare global {
    export function require(path: string): { default: Uint8Array };
}

const VERTICAL = Gtk.Orientation.VERTICAL;

const imgur = new Imgur();
imgur.update().catch((e) => {
    console.error(e);
});

function DogBox(props: { dog: Dog }) {
    const image = Ef.asyncRequest(
        Ef.memo(() => props.dog),
        async (dog) => {
            const url = dog.pics[0].url;
            const inputStream = Gio.MemoryInputStream.new_from_bytes(
                GLib.Bytes.new(await imgur.loadUrl(url))
            );
            const pixbuf = GdkPixbuf.Pixbuf.new_from_stream_at_scale(
                inputStream,
                480,
                -1,
                true,
                null
            );
            return Gdk.Texture.new_for_pixbuf(pixbuf);
        }
    );
    return (
        <Gtk.Box gtk:class="card" orientation={VERTICAL}>
            {image.error !== undefined ? (
                <Gtk.Label label="IMAGE LOADING ERROR" />
            ) : image.latest !== undefined ? (
                <Gtk.Picture
                    paintable={image.latest}
                    keep-aspect-ratio={true}
                    can-shrink={false}
                    alternative-text={props.dog.caption}
                />
            ) : (
                <Gtk.Spinner />
            )}
            <Gtk.Label label={props.dog.caption} />
        </Gtk.Box>
    );
}

function DogList() {
    const dogs = Ef.prop(imgur, "dogs");
    return (
        <Gtk.ListBox gtk:class="background" selection_mode={Gtk.SelectionMode.NONE}>
            {dogs.get().map((dog) => DogBox({ dog }))}
        </Gtk.ListBox>
    );
}

function Window(props: { application: Adw.Application }) {
    return (
        <Adw.ApplicationWindow
            application={props.application}
            default_width={400}
            default_height={600}
        >
            <Gtk.Box orientation={VERTICAL} hexpand={true}>
                <Adw.HeaderBar>
                    <Gtk.Button
                        gtk:type="start"
                        gtk:class="circular"
                        icon_name="reload"
                        gtk:on={{
                            clicked: () => console.log("clicked"),
                        }}
                    ></Gtk.Button>
                    <Adw.WindowTitle gtk:type="title" title="Dog Browser" />
                </Adw.HeaderBar>
                <Gtk.ScrolledWindow
                    vexpand={true}
                    vscrollbar_policy={Gtk.PolicyType.ALWAYS}
                    hscrollbar_policy={Gtk.PolicyType.NEVER}
                >
                    <DogList />
                </Gtk.ScrolledWindow>
            </Gtk.Box>
        </Adw.ApplicationWindow>
    );
}

const app: Adw.Application = (
    <Adw.Application
        application_id="lol.bodil.Gx.DogBrowser"
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
