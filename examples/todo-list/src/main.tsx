#!/usr/bin/env -S gjs -m

import { Adw, Gtk } from "@gx/gi";

import { Ef, useCSS } from "@gx/core";

import styleSheet from "./main.css";

const VERTICAL = Gtk.Orientation.VERTICAL;
const HORIZONTAL = Gtk.Orientation.HORIZONTAL;

type TodoEntry = {
    label: string;
    done: boolean;
};

const todos = Ef.cell<TodoEntry[]>(
    [
        { label: "Fix the bug", done: false },
        { label: "Call Joe", done: false },
    ].map((todo) => Ef.object(todo, { name: "TodoEntry" }))
);

function TodoItem({ item, index }: { item: TodoEntry; index: Ef.ReadableCell<number> }) {
    return (
        <Gtk.ListBoxRow>
            <Gtk.Box gtk:class={["todo-item", item.done ? "done" : null]} orientation={HORIZONTAL}>
                <Gtk.Entry
                    text={item.label}
                    hexpand={true}
                    placeholder-text="What to do?"
                    gtk:on={{
                        changed: (entry: Gtk.Entry) => Ef.untrack(() => (item.label = entry.text)),
                    }}
                />
                <Gtk.Button
                    icon-name="edit-delete"
                    tooltip-text="Delete this item"
                    gtk:class={["flat", "hover", "circular"]}
                    gtk:on={{
                        clicked: () =>
                            todos.update((t) => {
                                t.splice(index.get(), 1);
                                return t;
                            }),
                    }}
                />
                <Gtk.CheckButton
                    active={item.done}
                    gtk:class="selection-mode"
                    gtk:on={{
                        toggled: (checkbox: Gtk.CheckButton) => {
                            item.done = checkbox.active;
                        },
                    }}
                />
            </Gtk.Box>
        </Gtk.ListBoxRow>
    );
}

function TodoList() {
    return (
        <Gtk.ListBox
            gtk:id="todo-list"
            selection-mode={Gtk.SelectionMode.NONE}
            gtk:class="boxed-list"
        >
            {Ef.mapArray(todos, (todo, index) => (
                <TodoItem item={todo} index={index} />
            ))}
        </Gtk.ListBox>
    );
}

function Window({ application }: { application: Adw.Application }) {
    return (
        <Adw.ApplicationWindow application={application} default_width={480} default_height={640}>
            <Gtk.Box orientation={VERTICAL} hexpand={true} vexpand={true}>
                <Adw.HeaderBar gtk:class="flat">
                    <Gtk.Button
                        gtk:type="start"
                        gtk:class="circular"
                        icon-name="list-add"
                        tooltip-text="Add a new item"
                        gtk:on={{
                            clicked: () => {
                                todos.update((list) => [
                                    ...list,
                                    Ef.object({ label: "", done: false }, { name: "TodoEntry" }),
                                ]);
                            },
                        }}
                    />
                    <Adw.WindowTitle gtk:type="title" title="Todo List" />
                </Adw.HeaderBar>
                <TodoList />
            </Gtk.Box>
        </Adw.ApplicationWindow>
    );
}

const app: Adw.Application = (
    <Adw.Application
        application_id="lol.bodil.Gx.TodoList"
        gtk:on={{
            activate: (app) => {
                useCSS(styleSheet);
                const window: Adw.ApplicationWindow = (
                    <Window application={app} />
                ) as Adw.ApplicationWindow;
                window.show();
            },
        }}
    />
) as Adw.Application;

await Ef.root(() => app.run(ARGV));
