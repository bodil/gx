#!/usr/bin/env node
/* eslint-disable */
import esbuild from "esbuild";
import babel from "esbuild-plugin-babel";
import path from "node:path";
import fs from "node:fs";

const esbuildOptions = {
    logLevel: "warning",
    bundle: true,
    target: "firefox91",
    platform: "neutral",
    mainFields: ["module", "main"],
    sourcemap: "linked",
    external: ["gi://*"],
    define: { global: "window" },
    plugins: [
        babel({
            filter: /\.[jt]sx$/,
            config: {
                sourceMaps: "inline",
                presets: ["@babel/preset-typescript"],
                plugins: ["@gx/babel-plugin-gx"],
            },
        }),
    ],
};

function writeHarness(harness, runner, input) {
    const source = `#!/usr/bin/env -S gjs -m
import { runner } from "${runner.replace("\\", "\\\\").replace('"', '\\"')}";
runner(import("${input.replace("\\", "\\\\").replace('"', '\\"')}"));
`;
    return fs.promises.writeFile(harness, source, { encoding: "utf-8" });
}

const runner = process.argv[2];
const outdir = process.argv[3];
fs.mkdirSync(outdir, { recursive: true });
const inputs = process.argv.slice(4);
const entryPoints = {};
const harnesses = {};
const writes = [];
while (inputs.length > 0) {
    const output = inputs.shift();
    const input = inputs.shift();
    const harness = path.join(outdir, `${output}.harness.js`);
    writes.push(writeHarness(harness, runner, input));
    entryPoints[output] = harness;
}

try {
    await Promise.all(writes);
} catch (e) {
    console.error(e);
    console.error(e.stack);
    process.exit(1);
}

try {
    await esbuild.build({
        ...esbuildOptions,
        entryPoints,
        outdir,
    });
} catch (e) {
    process.exit(1);
}
