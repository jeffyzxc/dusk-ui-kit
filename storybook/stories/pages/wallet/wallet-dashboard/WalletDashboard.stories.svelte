<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-dashboard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Card from "@dusk-network/card/Card.svelte";
  import WalletAddress from "./organisms/wallet-address/WalletAddress.svelte";
  import WalletTransfer from "./organisms/wallet-transfer/WalletTransfer.svelte";
  import WalletTransactions from "./organisms/wallet-transactions/WalletTransactions.svelte";
  import WalletBalance from "./organisms/wallet-balance/WalletBalance.svelte";
  import WalletNetwork from "./organisms/wallet-network/WalletNetwork.svelte";
  import WalletToken from "./organisms/wallet-token/WalletToken.svelte";
  import { apiData } from "./mock-data.js";
  import meta from "../../../meta";
</script>

<Meta
  title="Pages/Wallet/Dashboard"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    darkMode: {
      stylePreview: false,
    },
    // jest: ['packages/templates/wallet-option/WalletCreateOptions.test.js'],
  }}"
  argTypes="{meta('templates/wallet-dashboard/WalletDashboard', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="balance">
      <Card>
        <WalletBalance />
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="address">
      <WalletAddress />
    </svelte:fragment>
    <svelte:fragment slot="transfer">
      <Card>
        <WalletTransfer />
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="transaction">
      <WalletTransactions transactions="{apiData}" />
    </svelte:fragment>
    <svelte:fragment slot="network">
      <WalletNetwork />
    </svelte:fragment>
    <svelte:fragment slot="token">
      <Card>
        <WalletToken />
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
