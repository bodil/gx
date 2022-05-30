import Gio from "@gx/gi/Gjs/Gio-2.0.js";
import GLib from "@gx/gi/Gjs/GLib-2.0.js";

/** Get the current working directory. */
export function cwd(): Gio.File {
    return Gio.File.new_for_path(GLib.get_current_dir());
}

/** Delete a directory and all of its contents. */
export function removeDir(path: Gio.File) {
    const files = path.enumerate_children(
        "%G_FILE_ATTRIBUTE_STANDARD_NAME,%G_FILE_ATTRIBUTE_STANDARD_TYPE",
        Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
        null
    );
    for (
        let file = files.next_file(null);
        file !== null;
        file = files.next_file(null)
    ) {
        const target = path.get_child(file.get_name());
        if (file.get_file_type() === Gio.FileType.DIRECTORY) {
            removeDir(target);
        } else {
            target.delete(null);
        }
    }
    path.delete(null);
}
