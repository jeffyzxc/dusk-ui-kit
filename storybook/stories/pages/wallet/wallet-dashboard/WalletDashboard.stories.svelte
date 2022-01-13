<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-dashboard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import WalletAddress from "./organisms/wallet-address/WalletAddress.svelte";
  import WalletTransfer from "./organisms/wallet-transfer/WalletTransfer.svelte";
  import WalletTransactions from "./organisms/wallet-transactions/WalletTransactions.svelte";
  import WalletBalance from "./organisms/wallet-balance/WalletBalance.svelte";
  import WalletNetwork from "./organisms/wallet-network/WalletNetwork.svelte";
  import WalletToken from "./organisms/wallet-token/WalletToken.svelte";
  import SkeletonLoader from "@dusk-network/skeleton-loader";
  import { transactionData } from "./mock-data.js";
  import { tokenData } from "./token-mock-data.js";
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
      <WalletBalance />
    </svelte:fragment>
    <svelte:fragment slot="address">
      <WalletAddress />
    </svelte:fragment>
    <svelte:fragment slot="transfer">
      <WalletTransfer />
    </svelte:fragment>
    <svelte:fragment slot="transaction">
      <WalletTransactions transactions="{transactionData}" />
    </svelte:fragment>
    <svelte:fragment slot="network">
      <WalletNetwork />
    </svelte:fragment>
    <svelte:fragment slot="token">
      <WalletToken tokens="{tokenData}" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>

<Story name="Loading State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="balance">
      <SkeletonLoader
        rounded="{true}"
        height="180px"
        extraSmallScreenHeight="120px"
        smallScreenHeight="120px"
        mediumScreenHeight="120px"
        largeScreenHeight="120px"
        extraLargeScreenHeight="120px"
        jumboScreenHeight="120px"
      />
    </svelte:fragment>
    <svelte:fragment slot="address">
      <SkeletonLoader
        rounded="{true}"
        height="200px"
        extraSmallScreenHeight="200px"
        smallScreenHeight="200px"
        mediumScreenHeight="200px"
        largeScreenHeight="200px"
        extraLargeScreenHeight="200px"
        jumboScreenHeight="200px"
      />
    </svelte:fragment>
    <svelte:fragment slot="transfer">
      <SkeletonLoader
        rounded="{true}"
        height="100px"
        extraSmallScreenHeight="100px"
        smallScreenHeight="100px"
        mediumScreenHeight="100px"
        largeScreenHeight="100px"
        extraLargeScreenHeight="100px"
        jumboScreenHeight="100px"
      />
    </svelte:fragment>
    <svelte:fragment slot="transaction">
      <SkeletonLoader
        rounded="{true}"
        height="400px"
        extraSmallScreenHeight="400px"
        smallScreenHeight="400px"
        mediumScreenHeight="400px"
        largeScreenHeight="400px"
        extraLargeScreenHeight="400px"
        jumboScreenHeight="400px"
      />
    </svelte:fragment>
    <svelte:fragment slot="network">
      <SkeletonLoader
        rounded="{true}"
        height="180px"
        extraSmallScreenHeight="180px"
        smallScreenHeight="180px"
        mediumScreenHeight="180px"
        largeScreenHeight="180px"
        extraLargeScreenHeight="180px"
        jumboScreenHeight="180px"
      />
    </svelte:fragment>
    <svelte:fragment slot="token">
      <SkeletonLoader
        rounded="{true}"
        height="200px"
        extraSmallScreenHeight="200px"
        smallScreenHeight="200px"
        mediumScreenHeight="200px"
        largeScreenHeight="200px"
        extraLargeScreenHeight="200px"
        jumboScreenHeight="200px"
      />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
