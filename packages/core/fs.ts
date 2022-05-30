import { Gio, GLib } from "@gx/gi";

/** Get the current working directory. */
export function cwd(): Gio.File {
    return Gio.File.new_for_path(GLib.get_current_dir());
}

/** Render a file path relative to another path. */
export function relativePath(source: Gio.File, dest: Gio.File): string {
    let level = 0;
    while (true) {
        const path = source.get_relative_path(dest);
        if (path !== null) {
            return "../".repeat(level) + path;
        }
        const parent = source.get_parent();
        if (parent === null) {
            return dest.get_parse_name();
        }
        source = parent;
        level += 1;
    }
}

/** Render a file path relative to the current working directory. */
export function cwdiseFilename(fileOrUri: Gio.File | string): string {
    const file = typeof fileOrUri === "string" ? Gio.File.new_for_uri(fileOrUri) : fileOrUri;
    if (file.get_uri_scheme() !== "file") {
        let uri = file.get_uri();
        uri = replaceStart("resource:///org/gnome/gjs/", "<gjs>/", uri);
        uri = replaceStart("resource:///org/gnome/", "<gnome>/", uri);
        return uri;
    }
    return relativePath(cwd(), file);
}

function replaceStart(pattern: string, replacement: string, s: string): string {
    if (s.startsWith(pattern)) {
        return replacement + s.slice(pattern.length);
    }
    return s;
}

/** Delete a directory and all of its contents. */
export function removeDir(path: Gio.File) {
    const files = path.enumerate_children(
        "%G_FILE_ATTRIBUTE_STANDARD_NAME,%G_FILE_ATTRIBUTE_STANDARD_TYPE",
        Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
        null
    );
    for (let file = files.next_file(null); file !== null; file = files.next_file(null)) {
        const target = path.get_child(file.get_name());
        if (file.get_file_type() === Gio.FileType.DIRECTORY) {
            removeDir(target);
        } else {
            target.delete(null);
        }
    }
    path.delete(null);
}

/**
 * Read a file into a {@linkcode Uint8Array}.
 * @param filename A file path.
 */
export function readFile(filename: string): Uint8Array {
    const file = Gio.file_new_for_uri(filename);
    const [, data] = file.load_contents(null);
    return data;
}
