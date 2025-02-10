// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    //   // React imports
    //   "^react$",
    //   "",
    //   // Named imports from external packages
    //   "^(?!react$|@/|[./]).*\\u007B.*\\u007D$",
    //   "",
    //   // // Default imports from external packages
    //   // "^[^.].*",
    //   // "",
    // Third party modules
    "<THIRD_PARTY_MODULES>",
    "",
    // Named imports from local alias (@/)
    "^@/.*$",
    "",
    // Relative imports with named exports
    "^[./]",
    "",
    //   // Relative imports with default exports
    //   "^[./].*(?<!\\u007B)$",
    //   "",
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
