import { Gtk, GObject } from "@gx/gi";

import { Async } from "@gx/core";

import { expect, test } from "..";

export function are_things_unequal() {
    expect(1337).not.equals(1338);
}

export function are_things_equal() {
    expect(1337).equals(1337);
}

export function are_things_deep_equal() {
    expect({ foo: "bar", bar: "foo" }).not.deep.equals({
        foo: "bar",
        bar: "bar",
    });
    expect({ foo: "bar", "1337": 1337 }).deep.equals({
        "1337": 1337,
        foo: "bar",
    });
    expect(["Joel", "Mike", "Robert"]).not.deep.equals(["Joe", "Mike", "Robert"]);
}

export function are_things_instances_of_things() {
    class Animal {}
    class Dog extends Animal {}
    class Cheese {}

    const dog = new Dog();
    const cheese = new Cheese();

    expect(dog).instanceOf(Animal);
    expect(cheese).not.instanceOf(Animal);
}

export function do_gobjects_implement_ginterfaces() {
    const button = new Gtk.Button();
    const object = new GObject.Object();
    expect(button).implements(Gtk.Widget);
    expect(object).not.implements(Gtk.Widget);
}

export const can_we_expect_timeouts = test({ timeout: 100, throws: Async.TimeoutError }, () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 10000);
    });
});

export const can_we_catch_a_throw = test({ throws: Error }, () => {
    class WelpError extends Error {
        constructor() {
            super("welp!");
            this.name = "WelpError";
        }
    }
    throw new WelpError();
});
