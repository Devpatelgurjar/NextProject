// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow usage of any type in TypeScript
      "@typescript-eslint/no-explicit-any": "off",

      // Allow unescaped apostrophes and similar HTML entities in JSX text
      "react/no-unescaped-entities": "off",

      // Warn (not error) when <img> tag used; prefer next/image
      "@next/next/no-img-element": "warn",

      // Warn on missing React hook dependencies instead of error
      "react-hooks/exhaustive-deps": "warn",

      // Disable var usage errors (or set to "warn" if preferred)
      "no-var": "warn",

      // Enforce prefer-const where possible (typical to keep)
      "prefer-const": "warn",

      // Warn on unused variables (change to error if needed)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_", // ignore variables starting with _
          argsIgnorePattern: "^_",
        },
      ],

      // You can add more rules/conventions here as needed
    },
  },
];
