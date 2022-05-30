import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
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
    commonjs(),
    nodeResolve(),
    shebang(),
];

if (process.env.NODE_ENV === "production") {
    plugins.push(terser());
}

export default {
    input: "src/main.ts",
    output: {
        file: "out/bin.js",
        format: "esm",
        generatedCode: "es2015",
        inlineDynamicImports: true,
        sourcemap: true,
    },
    external: /^gi:\/\/.*/,
    context: "null",
    plugins,
};
