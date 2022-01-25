# Dusk UI Kit - Organism - CookieBanner

[![Storybook](https://img.shields.io/badge/Storybook-Component_Playground-%23FF4785?style=flat&logo=storybook)](https://dusk-network.github.io/dusk-ui-kit/?path=/story/components-atoms-cookie-banner)
[![Docs](https://img.shields.io/badge/Documentation-%235E35CF?style=flat)](https://dusk-network.github.io/dusk-ui-kit/docs/components/atoms/cookie-banner)

## Installation

```
npm i -D @dusk-network/cookie-banner
```

## Usage

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=../../../examples/src/organisms/cookie-banner/CookieBanner_01.svelte) -->
<!-- The below code snippet is automatically added from ../../../examples/src/organisms/cookie-banner/CookieBanner_01.svelte -->
```svelte
<script>
  import CookieBanner from "@dusk-network/cookie-banner";
  import Button from "@dusk-network/button";
  import Control from "@dusk-network/control";

  let showBanner;
</script>

<Control>
  <Button on:click="{() => (showBanner = !showBanner)}">Toggle Cookie Banner</Button>
</Control>
<CookieBanner acceptLabel="Accept" settingsLabel="Settings" showBanner="{showBanner}">
  <p>
    We and selected partners and related companies, use cookies and similar technologies as
    specified in our Cookies Policy. You agree to consent to the use of these technologies by
    clicking Accept, or by continuing to browse this website. You can learn more about how we use
    cookies and set cookie preferences in Settings.
  </p>
</CookieBanner>
```
<!-- MARKDOWN-AUTO-DOCS:END -->
