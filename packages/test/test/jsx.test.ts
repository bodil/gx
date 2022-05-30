import { JSX } from "@gx/core";
import { expect } from "..";

function applyDiff<A>(list: A[], diff: JSX.Move<A>[]): A[] {
    const result = list.slice();
    for (const move of diff) {
        switch (move.type) {
            case JSX.MoveType.Remove:
                result.splice(result.indexOf(move.item), 1);
                break;
            case JSX.MoveType.Insert: {
                const oldPos = result.indexOf(move.item);
                if (oldPos >= 0) {
                    result.splice(oldPos, 1);
                }
                if (move.after === null) {
                    result.unshift(move.item);
                } else {
                    const target = result.indexOf(move.after) + 1;
                    result.splice(target, 0, move.item);
                }
            }
        }
    }
    return result;
}

export function child_diff() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8];
    const b = [6, 3, 5, 4, 9, 7, 8, 2, 10, 11];
    const diff = JSX.diff(a, b);
    expect(diff).deep.equals([
        { type: JSX.MoveType.Remove, item: 1 },
        { type: JSX.MoveType.Insert, after: null, item: 6 },
        { type: JSX.MoveType.Insert, after: 5, item: 4 },
        { type: JSX.MoveType.Insert, after: 4, item: 9 },
        { type: JSX.MoveType.Insert, after: 8, item: 2 },
        { type: JSX.MoveType.Insert, after: 2, item: 10 },
        { type: JSX.MoveType.Insert, after: 10, item: 11 },
    ]);
    const result = applyDiff(a, diff);
    expect(result).deep.equals(b);
}
