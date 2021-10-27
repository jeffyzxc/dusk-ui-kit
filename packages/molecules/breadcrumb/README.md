# Dusk UI Kit - Molecule - Breadcrumb

[![Storybook](https://img.shields.io/badge/Storybook-Component_Playground-%23FF4785?style=flat&logo=storybook)](https://dusk-network.github.io/dusk-ui-kit/?path=/story/components-atoms-breadcrumb)
[![Docs](https://img.shields.io/badge/Documentation-%235E35CF?style=flat)](https://dusk-network.github.io/dusk-ui-kit/docs/components/atoms/breadcrumb)

## Installation

```
npm i -D @dusk-network/breadcrumb
```

## Usage

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=../../../examples/src/molecules/breadcrumb/Breadcrumb_01.svelte) -->
<!-- The below code snippet is automatically added from ../../../examples/src/molecules/breadcrumb/Breadcrumb_01.svelte -->
```svelte
<script>
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";

  function onExit() {}
</script>

<Breadcrumb href="javascript:;" on:exit="{onExit}">
  <Item>
    <strong>Transaction details:</strong>
    <div>5ea9b166c197ccccf2egsdsrr5775kwoa3485</div>
  </Item>
</Breadcrumb>
```
<!-- MARKDOWN-AUTO-DOCS:END -->
