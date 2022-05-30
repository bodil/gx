import { Gio } from "@gx/gi";
import { object, on, ReadableCell } from ".";

export type AsyncRequestResult<A> = {
    current?: A;
    latest?: A;
    loading: boolean;
    error?: any;
    cancel?: Gio.Cancellable;
};

export function asyncRequest<A, B>(
    input: ReadableCell<A>,
    request: (input: A, cancel?: Gio.Cancellable) => Promise<B>,
    options: { name?: string; cancel?: Gio.Cancellable } = {}
): AsyncRequestResult<B> {
    const output: AsyncRequestResult<B> = object({
        loading: false,
        cancel: options.cancel,
    });
    on(
        [input],
        () => {
            output.loading = true;
            output.error = undefined;
            output.current = undefined;
            request(input.get(), options.cancel)
                .then((result) => {
                    output.loading = false;
                    output.error = undefined;
                    output.current = result;
                    output.latest = result;
                })
                .catch((err) => {
                    output.loading = false;
                    output.error = err;
                    output.current = undefined;
                });
        },
        { name: options.name }
    );
    return output;
}
