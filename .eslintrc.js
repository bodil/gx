module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json", "./**/tsconfig.json", "./**/tsconfig.test.json"],
    },
    plugins: ["@typescript-eslint"],
    ignorePatterns: ["**/out/**", "**/esbuild.config.js", "**/.eslintrc.js", "packages/gi/**"],
    env: {
        es2022: true,
        node: false,
    },
    rules: {
        curly: ["error", "all"],
        "default-case-last": "error",
        "default-param-last": "error",
        eqeqeq: ["error", "always"],
        "guard-for-in": "warn",
        "new-cap": ["error", { newIsCap: true, capIsNew: false }],
        "no-alert": "error",
        "no-constant-condition": ["error", { checkLoops: false }],
        "no-else-return": ["warn", { allowElseIf: true }],
        "no-empty": ["warn", { allowEmptyCatch: true }],
        "no-invalid-regexp": "error",
        "no-lonely-if": "warn",
        "no-return-assign": "error",
        "no-return-await": "warn",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-unneeded-ternary": "warn",
        "no-unreachable": "warn",
        "no-unused-expressions": "warn",
        "no-unused-labels": "warn",
        "no-unused-vars": "off",
        "no-useless-call": "warn",
        "no-useless-catch": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "error",
        "prefer-const": "warn",
        "prefer-destructuring": "off",
        "prefer-exponentiation-operator": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-object-has-own": "warn",
        "prefer-object-spread": "warn",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        radix: "error",
        "require-atomic-updates": "warn",
        "require-await": "warn",
        "require-yield": "warn",
        "use-isnan": "error",
        "valid-typeof": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
        "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        "@typescript-eslint/no-unnecessary-qualifier": "warn",
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-useless-empty-export": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-regexp-exec": "warn",
        "@typescript-eslint/prefer-return-this-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/strict-boolean-expressions": ["error", { allowNullableObject: true }],
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/unified-signatures": "warn",
    },
};
