# vite-plugin-bib

A Vite plugin to import BibTeX files as JS objects.

## Installation

```bash
npm install -D vite-plugin-bib

# or
yarn add -D vite-plugin-bib

# or
pnpm add -D vite-plugin-bib

# or
bun add -D vite-plugin-bib
```

## Usage

```js
// vite.config.[tj]s
import bib from "vite-plugin-bib";

export default {
  plugins: [
    // ...other plugins
    bib(),
  ],
};
```

Restart your Vite server and you can now import BibTeX files as JS objects:

```js
import bibliography from "./bibliography.bib";

console.log(bibliography);
```

## Types of bibliography files

You can add type definitions to your BibTeX files by including the entry in `vite-env.d.ts`:

```ts
// vite-env.d.ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-bib/client" />
```
