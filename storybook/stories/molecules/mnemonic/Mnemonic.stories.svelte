<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Mnemonic from "@dusk-network/mnemonic";
  import { types } from "@dusk-network/helpers";
  import { seedPhrase } from "./data.js";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Mnemonic"
  component="{Mnemonic}"
  parameters="{{ 
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
  }}"
  argTypes="{meta('mnemonic/Mnemonic',{
    onComplete: {
      action: 'onComplete',
      table: {
        disable: true,
      },
    },
    onPassed: {
      action: 'onPassed',
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  })}"
/>

<Story name="Preview words" args="{{ seed: seedPhrase, type: types.MNEMONIC.PREVIEW }}" let:args>
  <Mnemonic
    on:complete="{args.onComplete}"
    on:passed="{args.onPassed}"
    seed="{args.seed}"
    type="{args.type}"
  />
</Story>
<Story name="Confirm words" args="{{ seed: seedPhrase, type: types.MNEMONIC.CONFIRM }}" let:args>
  <Mnemonic
    on:complete="{args.onComplete}"
    on:passed="{args.onPassed}"
    seed="{args.seed}"
    type="{args.type}"
  />
</Story>
<Story name="Authentication" args="{{ type: types.MNEMONIC.AUTHENTICATE }}" let:args>
  <Mnemonic
    on:complete="{args.onComplete}"
    on:passed="{args.onPassed}"
    seed="{args.seed}"
    type="{args.type}"
  />
</Story>
