import { Ef } from "@gx/core";
import { expect } from "../src/";

// export function cell_reruns_effect() {
//     const cell = Ef.cell("Joe");
//     const expected = ["Joe", "Mike", "Robert"];
//     Ef.effect(() => assert(cell()).equals(expected.shift()));
//     cell.set("Mike");
//     cell.set("Robert");
// }

export function welp() {
    expect("Hello Joe").not.equals("Hello Mike");
}
