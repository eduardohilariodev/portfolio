// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^react$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    // Default imports from local alias (@/)
    "^@/(?!.*\\u007B).*$",
    "",
    // Named imports from local alias (@/)
    "^@/.*\\u007B.*\\u007D$",
    "",
    // Relative imports with default exports
    "^[./](?!.*\\u007B).*$",
    "",
    // Relative imports with named exports
    "^[./].*\\u007B.*\\u007D$",
    "",
    // Node.js built-in types
    "<TYPES>^(node:)",
    "",
    // Other types
    "<TYPES>",
    "",
    // Relative path types
    "<TYPES>^[.]",
  ],
  importOrderParserPlugins: ["typescript", "tsx", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
};

module.exports = config;
