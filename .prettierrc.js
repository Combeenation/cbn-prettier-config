const tailwindPlugin = require('tailwind-plugin');
const importsPlugin = require('imports-plugin');

/**
 * Notes on formatting SVG:
 *
 * - We're using the official [XML Plugin](@prettier/plugin-xml) even though that yields some strange results (ATM).
 *   See this ticket: https://github.com/prettier/plugin-xml/issues/648
 * - Another option would be to use prettiers HTML parser for SVG files as well using prettiers `override` option as
 *   explained [here](https://github.com/prettier/prettier/issues/5322#issuecomment-1276302630) but that had did not
 *   really work out of the box neither for the following reasons:
 *   - SVGs were not formatted when using the CLI with `npm run format`.
 *     Reason: https://github.com/prettier/prettier/issues/11141
 *   - Someone stated that the HTML parser is not really XML/SVG compliant but I don't know if this statement from 2020
 *     is still true: https://github.com/prettier/prettier/issues/5322#issuecomment-620539554
 *   - I wasn't able to use formatting manually from within VSCode with this approach 🤷‍♂️
 */

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
