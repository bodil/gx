import { Ef, Log } from "@gx/core";
import { LogLevel } from "@gx/core/log";
import { expect } from "..";

Log.scope("gx.effect").level = LogLevel.Trace;

export function cell_reruns_effect(): Promise<void> {
    return Ef.root(async () => {
        const cell = Ef.cell("Joe");
        const expected = ["Joe", "Mike", "Robert"];
        Ef.effect(() => expect(cell.get()).equals(expected.shift()));
        await Ef.schedule(async () => {
            cell.set("Mike");
            await Ef.schedule(() => {
                cell.set("Robert");
            });
        });
    });
}

export function cell_is_cell() {
    const cell = Ef.cell(0);
    expect(Ef.isCell(cell)).equals(true);
    expect(Ef.isWritableCell(cell)).equals(true);
}

export async function memo_is_cell() {
    await Ef.root(() => {
        const memo = Ef.memo(() => 0);
        expect(Ef.isCell(memo)).equals(true);
        expect(Ef.isWritableCell(memo)).equals(false);
    });
}

export async function array_map() {
    class TestValue {
        value: number;
        constructor(value: number) {
            this.value = value;
        }
    }

    await Ef.root(() => {
        const a = Ef.cell([1, 2, 3, 4, 5, 7, 8, 9, 10]);
        const b = Ef.mapArray(a, (v) => new TestValue(v + 2));
        const orig = Ef.untrack(() => b.get()).slice();
        let pass = 1;
        Ef.effect(() => {
            const next = b.get();
            if (pass === 1) {
                orig.forEach((v, i) => expect(v).equals(next[i]));
            } else {
                orig.forEach((v, i) => {
                    if (i === 4) {
                        expect(v).not.equals(next[i]);
                        expect(v.value).equals(7);
                        expect(next[i].value).equals(8);
                    } else {
                        expect(v).equals(next[i]);
                    }
                });
            }
            expect(pass).lessThan(3);
            pass++;
        });
        a.set([1, 2, 3, 4, 6, 7, 8, 9, 10]);
    });
}
