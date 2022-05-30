#!/usr/bin/env node
import esbuild from "esbuild";
import babel from "esbuild-plugin-babel";
import postcss from "esbuild-plugin-postcss2";
import postcssNested from "postcss-nested";
import cssnano from "cssnano";

await esbuild.build({
    logLevel: "info",
    entryPoints: ["src/main.tsx"],
    outfile: "out/bin.js",
    bundle: true,
    target: "firefox91",
    platform: "neutral",
    mainFields: ["module", "main"],
    sourcemap: "linked",
    external: ["gi://*"],
    define: { global: "window" },
    keepNames: true,
    loader: { ".css": "binary" },
    plugins: [
        babel({
            filter: /\.[jt]sx$/,
            config: {
                sourceMaps: "inline",
                presets: ["@babel/preset-typescript"],
                plugins: ["@gx/babel-plugin-gx"],
            },
        }),
        postcss.default({
            plugins: [
                postcssNested,
                cssnano({ preset: ["default", { normalizeWhitespace: false }] }),
            ],
        }),
    ],
});
