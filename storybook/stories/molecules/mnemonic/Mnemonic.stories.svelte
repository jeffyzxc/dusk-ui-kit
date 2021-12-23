<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
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
    // jest: ['packages/molecules/mnemonic/Mnemonic.test.js'],
  }}"
  argTypes="{meta('molecules/mnemonic/Mnemonic', {
    onComplete: {
      action: 'onComplete',
    },
    onPassed: {
      action: 'onPassed',
    },
    type: {
      control: {
        type: 'radio',
        options: Object.values(types.MNEMONIC),
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
