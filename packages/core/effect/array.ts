import { GObject } from "@gx/gi";
import { cell, createRoot, isCell, memo, onCleanup, ReadableCell, untrack, WritableCell } from ".";
import { isIterable } from "..";
import * as GObj from "../gobject";

function dispose(disposers: (() => void)[]) {
    disposers.forEach((d) => d());
}

export function mapArray<A, B>(
    list: ReadableCell<A[]>,
    f: (value: A, index: ReadableCell<number>) => B,
    options: { name?: string } = {}
): ReadableCell<B[]> {
    let items: A[] = [];
    let mapped: B[] = [];
    let len = 0;
    let disposers: (() => void)[] = [];
    let indices: WritableCell<number>[] | null = f.length > 1 ? [] : null;

    onCleanup(() => dispose(disposers));

    return memo(() => {
        const newItems = list.get() ?? [];
        let i: number, j: number;

        function mapper() {
            if (indices !== null) {
                const indexCell = cell(j);
                indices[j] = indexCell;
                return f(newItems[j], indexCell);
            }
            return (f as any)(newItems[j]);
        }

        return untrack(() => {
            const newLen = newItems.length;
            let temp: B[];
            let tempDisposers: (() => void)[];
            let tempIndices: WritableCell<number>[];
            let newIndices: Map<A, number>;
            let newIndicesNext: number[];
            let start: number, end: number, newEnd: number;
            let item: A;

            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    if (indices !== null) {
                        indices = [];
                    }
                }
            } else if (len === 0) {
                mapped = new Array(newLen);
                for (j = 0; j < newLen; j++) {
                    items[j] = newItems[j];
                    const [node, result] = createRoot(mapper, { name: options.name });
                    mapped[j] = result;
                    disposers[j] = () => node.dispose();
                }
                len = newLen;
            } else {
                temp = new Array(newLen);
                tempDisposers = new Array(newLen);
                if (indices !== null) {
                    tempIndices = new Array(newLen);
                }

                start = 0;
                end = Math.min(len, newLen);
                while (start < end && Object.is(items[start], newItems[start])) {
                    start++;
                }

                end = len - 1;
                newEnd = newLen - 1;
                while (end >= start && newEnd >= start && Object.is(items[end], newItems[newEnd])) {
                    end--;
                    newEnd--;
                }

                newIndices = new Map();
                newIndicesNext = new Array(newEnd + 1);
                for (j = newEnd; j >= start; j--) {
                    item = newItems[j];
                    i = newIndices.get(item)!;
                    newIndicesNext[j] = i === undefined ? -1 : i;
                    newIndices.set(item, j);
                }

                for (i = start; i <= end; i++) {
                    item = items[i];
                    j = newIndices.get(item)!;
                    if (j !== undefined && j !== -1) {
                        temp[j] = mapped[i];
                        tempDisposers[j] = disposers[i];
                        if (indices !== null) {
                            tempIndices![j] = indices[i];
                        }
                        j = newIndicesNext[j];
                        newIndices.set(item, j);
                    } else {
                        disposers[i]();
                    }
                }

                for (j = start; j <= newEnd; j++) {
                    if (j in temp) {
                        mapped[j] = temp[j];
                        disposers[j] = tempDisposers[j];
                        if (indices !== null) {
                            indices[j] = tempIndices![j];
                            indices[j].set(j);
                        }
                    } else {
                        const [node, result] = createRoot(mapper, { name: options.name });
                        mapped[j] = result;
                        disposers[j] = () => node.dispose();
                    }
                }

                mapped = mapped.slice(0, (len = newLen));
                items = newItems.slice();
            }

            return mapped;
        });
    });
}

function untangle<A>(
    value:
        | ReadableCell<Iterable<A | null | undefined> | A | null | undefined>
        | Iterable<A | null | undefined>
        | A
        | null
        | undefined
): A[] {
    if (value === undefined || value === null) {
        return [];
    }
    if (isCell(value)) {
        return untangle(value.get());
    }
    if (GObj.isA(GObject.Object, value) || !isIterable(value)) {
        return [value as A];
    }
    return Array.from(value).filter((a) => a !== null && a !== undefined) as A[];
}

export function buildArray<A>(
    inputs: (
        | ReadableCell<Iterable<A | null | undefined> | A | null | undefined>
        | Iterable<A | null | undefined>
        | A
        | null
        | undefined
    )[],
    options: { name?: string } = {}
): ReadableCell<A[]> {
    return memo(() => inputs.flatMap(untangle), options);
}
