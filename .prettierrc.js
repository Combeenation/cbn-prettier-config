const tailwindPlugin = require('tailwind-plugin');
const importsPlugin = require('imports-plugin');

/**
 * Defining the plugins this way is a workaround as the tailwind & the imports plugin wouldn't work otherwise when
 * installed together.
 *
 * General info about the issue:
 *   - https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31
 *   - https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/9
 *
 * Details about the workaround:
 *   - Base: https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/9#issuecomment-1021028722
 *   - Addition: https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/9#issuecomment-1157359437
 */
const plugins = [
  {
    parsers: {
      typescript: {
        ...tailwindPlugin.parsers.typescript,
        preprocess: importsPlugin.parsers.typescript.preprocess,
      },
    },
    options: {
      ...tailwindPlugin.options,
      ...importsPlugin.options,
    },
  },
];

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

  plugins,

  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
