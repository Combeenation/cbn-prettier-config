/**
 * All options starting with 'importOrder' come from plugin `@trivago/prettier-plugin-sort-imports`.
 */
module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  printWidth: 120,
  trailingComma: 'es5',
  quoteProps: 'consistent',

  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
