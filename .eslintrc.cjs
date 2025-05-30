module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", "build", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "react-hooks"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            {
                allowConstantExport: true,
            },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react-hooks/exhaustive-deps": "off",
    },
};
