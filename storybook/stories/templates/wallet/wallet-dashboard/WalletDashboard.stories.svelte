<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/wallet-dashboard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Wallet/Dashboard"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/wallet-dashboard/WalletDashboard.test.js'],
  }}"
  argTypes="{meta('templates/wallet-dashboard/WalletDashboard', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" width="1920" height="104px" />
    </svelte:fragment>
    <svelte:fragment slot="balance">
      <Placeholder text="Balance" height="200px" />
    </svelte:fragment>
    <svelte:fragment slot="address">
      <Placeholder text="Address" height="200px" />
    </svelte:fragment>
    <svelte:fragment slot="transfer">
      <Placeholder text="Transfer" height="200px" />
    </svelte:fragment>
    <svelte:fragment slot="transaction">
      <Placeholder text="Transaction" height="200px" />
    </svelte:fragment>
    <svelte:fragment slot="network">
      <Placeholder text="Network" height="200px" />
    </svelte:fragment>
    <svelte:fragment slot="token">
      <Placeholder text="Token" height="200px" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" width="1920" height="108px" />
    </svelte:fragment>
  </Template>
</Story>
