<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/wallet-option";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Wallet/Option"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/wallet-option/WalletOption.test.js'],
  }}"
  argTypes="{meta('templates/wallet-option/WalletOption', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" width="1920" height="{104}" />
    </svelte:fragment>
    <svelte:fragment slot="heading-mobile">
      <Placeholder text="Mobile Heading" height="{105}" />
    </svelte:fragment>
    <svelte:fragment slot="lead-question">
      <Placeholder text="Lead Question" height="{105}" />
    </svelte:fragment>
    <svelte:fragment slot="option">
      <Placeholder text="Options" height="{365}" />
    </svelte:fragment>

    <svelte:fragment slot="footer">
      <Placeholder text="Footer" width="1920" height="{108}" />
    </svelte:fragment>
  </Template>
</Story>
