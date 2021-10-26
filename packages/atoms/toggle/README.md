# Dusk UI Kit - Atom - Toggle

[![Storybook](https://img.shields.io/badge/Storybook-Component_Playground-%23FF4785?style=flat&toggle=storybook)](https://dusk-network.github.io/dusk-ui-kit/?path=/story/components-atoms-toggle)
[![Docs](https://img.shields.io/badge/Documentation-%235E35CF?style=flat)](https://dusk-network.github.io/dusk-ui-kit/docs/components/atoms/toggle)

## Installation

```
npm i -D @dusk-network/toggle
```

## Usage

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=../../../examples/src/atoms/toggle/Toggle_01.svelte) -->
<!-- The below code snippet is automatically added from ../../../examples/src/atoms/toggle/Toggle_01.svelte -->
```svelte
<script>
  import Toggle from "@dusk-network/toggle";

  let value = false;
  const type = "switch";
  let variant = "brand";

  function onChange() {
    //Runs on triggered event
  }
  function onClick() {
    //Runs on triggered event
  }
</script>

<Toggle
  type="{type}"
  name="switch"
  id="switch"
  variant="{variant}"
  value="{value}"
  on:change="{onChange}"
  on:click="{onClick}"
/>
```
<!-- MARKDOWN-AUTO-DOCS:END -->
