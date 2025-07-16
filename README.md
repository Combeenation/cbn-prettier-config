# `@combeenation/prettier-config`

> Combeenation [Prettier](https://prettier.io) config.

## Usage

- Install:
  ```bash
  $ npm i --save-dev @combeenation/prettier-config
  ```
- Edit `package.json`:
  ```jsonc
  {
    // ...
    "prettier": "@combeenation/prettier-config",
  }
  ```
- Remove existing prettier config files like `.prettierrc.json` etc.
- Create `.prettierignore` which could look this this:
  ```text
  build/
  node_modules/
  ```

## Overwrite settings

This method does not offer a way to overwrite some properties from the shared configuration.
In order to do so, remove the "prettier" configuration from the `package.json` and follow examples in the official prettier documentation:
[Extending a Sharable Config](https://prettier.io/docs/sharing-configurations#extending-a-sharable-config)

### Included plugins

This package comes with the following plugins pre-installed:

- [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)  
  Options `importOrderSeparation` & `importOrderSortSpecifiers` are set to `true` by default here.
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- [prettier-plugin-packagejson](https://www.npmjs.com/package/prettier-plugin-packagejson)
- [@prettier/plugin-xml](https://www.npmjs.com/package/@prettier/plugin-xml)

All options provided by those plugin can be adjusted using the method described above in section `Overwrite settings`.
