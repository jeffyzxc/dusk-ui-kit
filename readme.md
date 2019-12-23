# <div align="center">:sparkles: Dusk UI Kit :sparkles:</div>

<div align="center"><a href="https://travis-ci.com/dusk-network/dusk-ui-kit">
  <img src="https://travis-ci.com/dusk-network/dusk-ui-kit.svg?token=epVgoKeysWpeWXA7Vyxt&amp;branch=master" alt="TravisCI">
</a> <a href="https://dusk-network.github.io/dusk-ui-kit">
  <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg" alt="Storybook">
</a></div>

## About the UI Kit

The UI Kit is based on Dusk's [media kit](https://dusk.network/pages/media-kit). Dusk launched it's new branding in 2019, with a focus on marketing. Moving into 2020, we will begin to develop an overarching Branding Guidance document which will provide a single source of truth for all of Dusk's communication channels.

Presently, we have built on the existing guidelines, however, we expect to transition to using a typical _Brand Guidance_ approach.

## Purpose

The purpose of the UI Kit is to create a unified toolkit that is used by designers and developers in their projects, ensuring all Dusk projects are accessible and have a consistent look and feel.

**The guidelines contained herein are to be applied to all of Dusk's digital products.**

## Web Toolkit

By bringing design, user experience, accessibility and functionality into reusable components, we can accelerate the speed of development and increase consistency and reliability of Dusk products.

The components within the UI Kit are organised according to the principles of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), providing a high level of composition.

## :construction: ~~Installation~~

~~Run the following commands using [yarn](https://yarnpkg.com/lang/en/)~~

```bash
$ yarn add @dusk/ui
```

Import a [React](https://reactjs.org/) component

```javascript
import { Button, Card } from '@dusk/ui/atoms'
import { Block } from '@dusk/ui/molecules'
import { Feature } from '@dusk/ui/organisms'
```

Import the styles

```scss
@import '@dusk/ui/styles';
```

## Development

_Clone and install_

```bash
$ git clone https://github.com/dusk-network/dusk-ui-kit
$ cd dusk-ui-kit
$ yarn
```

_Run the dev server_

```bash
$ yarn dev
```

- Develop components in the `/components` folder
- Tell component stories in `*.stories.js`
- Override Bootstrap variables in `/styles/theme/dusk/variables.scss`
- Override Bootstrap styles in `/styles/theme/dusk/styles.scss`

_Run the design system server_

```bash
$ yarn storybook
```

~~_Create a new build_~~

```bash
$ yarn build
```

### Roadmap

- ~~Integrate with [Storybook](https://storybook.js.org/) for Design System presentation~~
- ~~Integrate [Jest](https://jestjs.io/) and write initial tests~~
- Migrate to [Emotion](https://emotion.sh/) for styling
- Integrate with [Bit](https://bit.dev/) for component management

**If there is a component you need or if you have any questions please open an issue!**
