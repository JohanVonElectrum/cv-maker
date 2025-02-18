import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import stylisticJs from "@stylistic/eslint-plugin-js"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import parserTs from "@typescript-eslint/parser"

export default tseslint.config(
    {ignores: ["dist"]},
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: parserTs,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@stylistic/js": stylisticJs,
            "@stylistic/ts": stylisticTs,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                {allowConstantExport: true},
            ],
            "@stylistic/js/eol-last": ["error", "always"],
            "@stylistic/ts/semi": ["error", "always"],
            "@stylistic/ts/quotes": ["error", "double"],
            "@stylistic/ts/indent": ["error", 4],
        },
    },
)
