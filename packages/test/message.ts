export type ErrorDesc = {
    name: string;
    detail: string;
    stack?: string;
    cause?: ErrorDesc;
    expected?: string;
    actual?: string;
    operator?: string;
    showDiff?: boolean;
};

export type TestResultMessageType = {
    ok: { name: string };
    failed: { name: string; error: ErrorDesc };
    timeout: { name: string; timeout: number };
};

export type TestResult = keyof TestResultMessageType;

export type MessageType = {
    importError: { error: ErrorDesc };
    prelude: { total: number };
} & TestResultMessageType;

export type Message<Type extends keyof MessageType> = {
    type: Type;
} & MessageType[Type];

export class DidNotThrowError<E extends Error, A extends Error> extends Error {
    constructor(expected: new (...args: any[]) => E, actual?: A) {
        super(`Test failed to throw ${expected.name}`);
        if (actual !== undefined) {
            this.message = `${this.message}, threw ${actual.name ?? actual.toString()} instead`;
        }
        this.name = "DidNotThrowError";
    }
}
