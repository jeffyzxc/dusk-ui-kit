<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Mnemonic from "@dusk-network/mnemonic";
  import { types } from "@dusk-network/helpers";
  import { seedPhrase } from "./data.js";
</script>

<Meta
  title="Components/Molecules/Mnemonic"
  component="{Mnemonic}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
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
  }}"
/>

<Template let:args>
  <Mnemonic
    on:complete="{args.onComplete}"
    on:passed="{args.onPassed}"
    seed="{args.seed}"
    type="{args.type}"
  />
</Template>

<Story name="Preview words" args="{{ seed: seedPhrase, type: types.MNEMONIC.PREVIEW }}" />
<Story name="Confirm words" args="{{ seed: seedPhrase, type: types.MNEMONIC.CONFIRM }}" />
<Story name="Authentication" args="{{ type: types.MNEMONIC.AUTHENTICATE }}" />
