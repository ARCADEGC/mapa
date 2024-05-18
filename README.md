`bunx create-next-app@latest`

`bun i -D prettier prettier-plugin-tailwindcss`

```json
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "semi": true,
    "experimentalTernaries": true,
    "singleQuote": false,
    "jsxSingleQuote": false,
    "quoteProps": "as-needed",
    "trailingComma": "all",
    "singleAttributePerLine": true,
    "htmlWhitespaceSensitivity": "css",
    "vueIndentScriptAndStyle": false,
    "proseWrap": "never",
    "insertPragma": false,
    "printWidth": 100,
    "requirePragma": false,
    "tabWidth": 4,
    "useTabs": false,
    "embeddedLanguageFormatting": "auto",
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

`bun i -D eslint-config-prettier eslint-plugin-tailwindcss`

`"extends": ["next/core-web-vitals", "plugin:tailwindcss/recommended", "prettier"]`

`bunx shadcn-ui@latest init`
