import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import shebang from "rollup-plugin-preserve-shebang";
import { terser } from "rollup-plugin-terser";

const plugins = [
    typescript(),
    babel({
        plugins: ["@gx/babel-plugin-gx"],
        extensions: [".tsx"],
        babelHelpers: "bundled",
    }),
    nodeResolve(),
    shebang(),
];

if (process.env.NODE_ENV === "production") {
    plugins.push(terser());
}

export default {
    input: "src/main.tsx",
    output: {
        file: "out/bin.js",
        format: "esm",
        generatedCode: "es2015",
        // Gjs doesn't support source maps atm but let's be optimistic:
        sourcemap: process.env.NODE_ENV !== "production",
    },
    external: /^gi:\/\/.*/,
    context: "null",
    plugins,
};
