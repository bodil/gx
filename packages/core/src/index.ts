import * as JSX from "./jsx";
import * as Ef from "./effect";
import * as FS from "./fs";
import * as Display from "./display";
import * as GObj from "./gobject";
import * as Async from "./async";

export { Async, Ef, FS, Display, JSX, GObj };

export interface Disposable {
    dispose(): void;
}
