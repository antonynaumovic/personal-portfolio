import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  tseslint.configs.recommended,
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": ["warn"],
      "no-undef": ["warn"],
      quotes: ["warn", "double", { avoidEscape: true }],
      semi: ["warn", "always"],
      indent: ["warn", 2],
      "class-methods-use-this": "warn",
      "eol-last": ["warn", "always"],
      "no-unused-expressions": ["warn"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": ["warn"],
      "no-useless-constructor": 0,
      "no-loop-func": 0,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);

export default eslintConfig;

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   {
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/no-unused-vars": "warn"
//     }
//   }
// ]);
