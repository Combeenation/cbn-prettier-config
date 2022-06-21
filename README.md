# `@combeenation/prettier-config`

> Combeenation [Prettier](https://prettier.io) config.

## Usage

- Install:
  ```bash
  $ npm i --dev @combeenation/prettier-config
  ```
- Edit `package.json`:
  ```jsonc
  {
    // ...
    "prettier": "@combeenation/prettier-config"
  }
  ```
- Remove existing prettier config files like `.prettierrc.json` etc.
- Create `.prettierignore` which could look this this:
  ```text
  build/
  node_modules/
  ```

## Overwrite settings

This method does not offer a way to overwrite some properties from the shared configuration. In order to do so, one has to create a dedicated `.prettierrc.js` file and use node imports like this:

```js
module.exports = {
  ...require("@combeenation/prettier-config"),
  semi: false,
};
```

### Import re-organization

Comes with [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports) and therefore supports all customisation options of the plugin.
Options `importOrderSeparation` & `importOrderSortSpecifiers` are set to `true` by default here.
