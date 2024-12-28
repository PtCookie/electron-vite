import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import globals from "globals";
import pluginJs from "@eslint/js";
import { includeIgnoreFile } from "@eslint/compat";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginRouter from "@tanstack/eslint-plugin-router";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitignorePath = resolve(__dirname, ".gitignore");

/** @type {import("eslint").Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { settings: { react: { version: "detect" } } },
  pluginImport.flatConfigs.electron,
  pluginImport.flatConfigs.react,
  ...pluginRouter.configs["flat/recommended"],
];
