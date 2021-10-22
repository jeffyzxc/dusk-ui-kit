# Dusk UI Kit - Molecule - Mnemonic

[![Storybook](https://img.shields.io/badge/Storybook-Component_Playground-%23FF4785?style=flat&logo=storybook)](https://dusk-network.github.io/dusk-ui-kit/?path=/story/components-atoms-mnemonic)
[![Docs](https://img.shields.io/badge/Documentation-%235E35CF?style=flat)](https://dusk-network.github.io/dusk-ui-kit/docs/components/atoms/mnemonic)

## Installation

```
npm i -D @dusk-network/mnemonic
```

## Usage

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=../../../examples/src/molecules/mnemonic/Mnemonic_01.svelte) -->
<!-- The below code snippet is automatically added from ../../../examples/src/molecules/mnemonic/Mnemonic_01.svelte -->
```svelte
<script>
  import Mnemonic from "@dusk-network/mnemonic";
  import types from "@dusk-network/helpers/types.js";

  function onComplete() {}
  function onPassed() {}
  const seed = [
    "oyster",
    "close",
    "apple",
    "unfold",
    "wood",
    "alone",
    "during",
    "storm",
    "pulp",
    "glow",
    "album",
    "shop",
  ];
  const type = types.MNEMONIC.PREVIEW;
  const length = 12;
</script>

<Mnemonic
  on:complete="{onComplete}"
  on:passed="{onPassed}"
  seed="{seed}"
  type="{type}"
  length="{length}"
/>
```
<!-- MARKDOWN-AUTO-DOCS:END -->
