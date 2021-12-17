<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/wallet-wizard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Wallet/Wizard"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/wallet-wizard/WalletWizard.test.js'],
  }}"
  argTypes="{meta('templates/wallet-wizard/WalletWizard', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" width="1920" height="104px" />
    </svelte:fragment>
    <svelte:fragment slot="wizard">
      <Placeholder text="Wizard" height="565px" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" width="1920" height="108px" />
    </svelte:fragment>
  </Template>
</Story>
