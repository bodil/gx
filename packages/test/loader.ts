import { Gio, System } from "@gx/gi";

import { FS } from "@gx/core";

function tempDir(root: Gio.File): Gio.File {
    return root.resolve_relative_path(".gxtest");
}

function esbuild(target: Gio.File, inputs: Gio.File[]): Record<string, Gio.File> {
    const esbuildHelperPath = Gio.File.new_for_uri(import.meta.url)
        .get_parent()
        ?.get_child("esbuild-helper.mjs");
    if (esbuildHelperPath === undefined || !esbuildHelperPath.query_exists(null)) {
        throw new Error(`Could not find ESBuild helper!`);
    }

    const entryPoints: { [key: string]: string } = {};
    const inputMap: Record<string, Gio.File> = {};

    inputs.forEach((file, index) => {
        entryPoints[`test_${index}`] = file.get_path()!;
        const outputFile = target.resolve_relative_path(`test_${index}.js`);
        inputMap[outputFile.get_uri()] = file;
    });

    const inputArgs = Object.entries(entryPoints).flat(1);

    const runner = Gio.File.new_for_uri(import.meta.url)
        .get_parent()!
        .get_parent()!
        .resolve_relative_path("runner.ts")
        .get_path()!;

    const esbuild = Gio.Subprocess.new(
        [esbuildHelperPath.get_path()!, runner, target.get_path()!, ...inputArgs],
        Gio.SubprocessFlags.INHERIT_FDS
    );
    esbuild.wait(null);
    if (esbuild.get_exit_status() > 0) {
        System.exit(esbuild.get_exit_status());
    }

    return inputMap;
}

export function findTests(path: Gio.File): Gio.File[] {
    const fileType = path.query_file_type(Gio.FileQueryInfoFlags.NONE, null);
    if (fileType === Gio.FileType.DIRECTORY) {
        const files = path.enumerate_children(
            "%G_FILE_ATTRIBUTE_STANDARD_NAME",
            Gio.FileQueryInfoFlags.NONE,
            null
        );
        let tests: Gio.File[] = [];
        for (let file = files.next_file(null); file !== null; file = files.next_file(null)) {
            const target = path.get_child(file.get_name());
            tests = tests.concat(findTests(target));
        }
        return tests;
    } else if (
        fileType === Gio.FileType.REGULAR &&
        /.*\.test\.[jt]sx?$/.test(path.get_basename()!)
    ) {
        return [path];
    }
    return [];
}

export function compileTests(files: Gio.File[]): Record<string, Gio.File> {
    const rootDir = FS.cwd();
    const outDir = tempDir(rootDir);
    if (outDir.query_exists(null)) {
        FS.removeDir(outDir);
    }

    const sources = files.flatMap((file) => findTests(file));
    return esbuild(outDir, sources);
}

export function cleanup() {
    const outDir = tempDir(FS.cwd());
    if (outDir.query_exists(null)) {
        FS.removeDir(outDir);
    }
}
