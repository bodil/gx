#!/usr/bin/env node
import esbuild from "esbuild";
import babel from "esbuild-plugin-babel";

await esbuild.build({
    logLevel: "info",
    entryPoints: ["./main.ts"],
    outfile: "out/bin.js",
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
});
