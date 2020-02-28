# <div align="center">:sparkles: Dusk UI Kit :sparkles:</div>

<div align="center"><a href="https://travis-ci.com/dusk-network/dusk-ui-kit">
  <img src="https://travis-ci.com/dusk-network/dusk-ui-kit.svg?token=epVgoKeysWpeWXA7Vyxt&amp;branch=master" alt="TravisCI">
</a> <a href="https://dusk-network.github.io/dusk-ui-kit">
  <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg" alt="Storybook">
</a>
<a href="https://lerna.js.org/">
  <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna">
</a></div>

## About the UI Kit

Moving into 2020, we will begin to develop an overarching Branding Guidance document which will provide a single source of truth for all of Dusk's communication channels.

Presently, we have built on the existing guidelines, however, we expect to transition to using a typical _Brand Guidance_ approach.

## Purpose

The purpose of the UI Kit is to create a unified toolkit that is used by designers and developers in their projects, ensuring all Dusk projects are accessible and have a consistent look and feel.

**The guidelines contained herein are to be applied to all of Dusk's digital products.**

## Web Toolkit

By bringing design, user experience, accessibility and functionality into reusable components, we can accelerate the speed of development and increase consistency and reliability of Dusk products.

The components within the UI Kit are organised according to the principles of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), providing a high level of composition.

## Installation

```bash
$ yarn add @dusk/styles
$ yarn add @dusk/button
$ yarn add @dusk/list
$ yarn add @dusk/navbar
...
```

### Import a component

```javascript
import Button, { Label } from "@dusk/button";
```

```html
<button variant="brand">
  <label>Dusk UI Kit is awesome x{clicked}</label>
</button>
```

### Import styles

Install `@dusk/styles` if you have not already.

```bash
$ yarn add @dusk/styles
```

Include the rollup plugin and configure accordingly...

```javascript
// rollup.config.js

const duk = require('@dusk/styles/rollup-plugin-duk');
...
plugins: [
  ...
  duk({
    output: 'public/global.css'
  })
]
```

Import Tailwind styles

```javascript
// main.js

import "@dusk/styles/tailwind.css";
```

Import font

```html
// index.html

<link
  href="https://fonts.googleapis.com/css?family=Hind+Siliguri:400,500,600&display=swap"
  rel="stylesheet"
/>
```

## Development

_Clone and install_

```bash
$ git clone https://github.com/dusk-network/dusk-ui-kit
$ cd dusk-ui-kit
$ yarn
```

_Start Storybook_

```bash
$ yarn storybook
```

### Latest Design

<https://xd.adobe.com/view/f3f6eb08-9076-47d8-4261-75b8af8e3424-85c7/grid>

**If there is a component you need or if you have any questions please open an issue!**
