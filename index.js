const config = {
  $schema: "http://json.schemastore.org/prettierrc",
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "auto",
  printWidth: 120,
  trailingComma: "es5",
  quoteProps: "consistent",

  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "@prettier/plugin-xml",
    "prettier-plugin-packagejson",
    // MUST come last, see [this](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins)
    "prettier-plugin-tailwindcss",
  ],

  /**
   * Options from plugin `@prettier/plugin-xml`.
   * Why we need this: https://github.com/prettier/plugin-xml/issues/648.
   */
  xmlWhitespaceSensitivity: "ignore",

  /**
   * Options from plugin `@trivago/prettier-plugin-sort-imports`.
   */
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};

export default config;
