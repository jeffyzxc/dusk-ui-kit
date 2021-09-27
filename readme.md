# Dusk UI Kit

[![Powered By Sveltekit](https://img.shields.io/badge/powered%20by-svelte-FF3C02.svg?style=flat&logo=svelte)](https://kit.svelte.dev/) [![ECMAScript: 2020](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![Tailwindcss](https://img.shields.io/badge/Tailwindcss-CSS--Framework-%2338B2AC?logo=tailwindcss)](https://tailwindcss.com) [![Postcss](https://img.shields.io/badge/Postcss-style-%23DD3A0A?style=flat&logo=postcss)](https://postcss.org) [![StorybookJS](https://img.shields.io/badge/Storybook-UI--Webcomponent--tool-%23FF4785?style=flat&logo=storybook)](https://storybook.js.org/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Jest](https://img.shields.io/badge/Jest-Unit--Testing--Framework-%23C21325?style=flat&logo=jest)](https://jestjs.io/) [![Prettier](https://img.shields.io/badge/Prettier-code--formatter-%23F7B93E?style=flat&logo=prettier)](https://prettier.io/) [![Eslint](https://img.shields.io/badge/Eslint-linter-%234B32C3?style=flat&logo=eslint)](https://eslint.org/) [![License: MPL-2](https://img.shields.io/badge/Licence-MPL--2-brightgreen?logo=mozilla)](https://github.com/navneetsharmaui/sveltekit-starter/blob/main/LICENSE)

## Purpose

The purpose of the UI Kit is to create a unified toolkit that is used by designers and developers in their projects, ensuring all Dusk projects are accessible and have a consistent look and feel.

**The guidelines contained herein are to be applied to all of Dusk's digital products.**

## Web Toolkit

By bringing design, user experience, accessibility and functionality into reusable components, we can accelerate the speed of development and increase consistency and reliability of Dusk products.

The components within the UI Kit are organised according to the principles of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), providing a high level of composition.

## Installation

```bash
$ npm i -D @dusk-network/styles
$ npm i -D @dusk-network/button
$ npm i -D @dusk-network/navbar
...
```

### Import a component

```svelte
import Button, {Label} from "@dusk-network/button";

<Button variant="brand">
  <Label>Dusk UI Kit 🚀</Label>
</Button>
```

## Development

### Clone and install

```bash
git clone https://github.com/dusk-network/dusk-ui-kit
cd dusk-ui-kit
pnpm i
```

### Changeset Workflow

#### Create a feature branch

```bash
git checkout -b <issue-id>
```

#### Commit (frequently) and push your changes to the branch

```bash
git commit
git push
```

#### Add a changeset (if your changes should result in a new version)

```bash
pnpm changeset
```

#### Create a pull request

```bash
gh pr create
```

### Start Storybook

```bash
cd storybook
pnpm run storybook
```

## Latest Design

<https://www.figma.com/file/ffGd6h7b4DlAycsxzk2whB/Dusk-Ui-Kit>

**If there is a component you need or if you have any questions please open an issue!**
