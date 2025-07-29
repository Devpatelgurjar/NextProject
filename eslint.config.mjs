import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ⬇️ Add your project-wide rule overrides here:
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",    // Disable error for `any`
      "react/no-unescaped-entities": "off",           // Disable error for unescaped '
      "@next/next/no-img-element": "warn",            // Just warn for <img>
      "react-hooks/exhaustive-deps": "warn",          // Warn for missing deps in useEffect
      // Add any other relaxing/overriding rules here
    },
  },
];

export default eslintConfig;
