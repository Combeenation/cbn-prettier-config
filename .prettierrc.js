/**
 * All options starting with 'importOrder' come from plugin `@trivago/prettier-plugin-sort-imports`.
 *
 * Note HAR: I changed the format of this file from `json` to `.prettierrc.js` just to be able to add this comment which
 *           is not possible with JSON files at all (as far as I know)...
 * 
 *           Also I would have liked to place this info in some "importOrderNote" property, but prettier is then
 *           printing some "[warn] Ignored unknown option ..." warning for each file when running `npm run format`...
 * 
 *           I think the `$schema` is not "doing anything" anymore but I'm still leaving it e.g. for later reference 🤷‍♂️
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

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
