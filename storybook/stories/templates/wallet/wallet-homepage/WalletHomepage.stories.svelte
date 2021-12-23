<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/wallet-homepage";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Wallet/Homepage"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/wallet-homepage/WalletHomepage.test.js'],
  }}"
  argTypes="{meta('templates/wallet-homepage/WalletHomepage', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" width="1920" height="104px" />
    </svelte:fragment>
    <svelte:fragment slot="hero">
      <Placeholder text="Hero" height="365px" />
    </svelte:fragment>
    <svelte:fragment slot="cta-create">
      <Placeholder text="Create Wallet" height="170px" />
    </svelte:fragment>
    <svelte:fragment slot="cta-access">
      <Placeholder text="Access Wallet" height="170px" />
    </svelte:fragment>
    <svelte:fragment slot="about-dusk">
      <Placeholder text="About Dusk" height="570px" />
    </svelte:fragment>
    <svelte:fragment slot="info-security">
      <Placeholder text="Wallet Security" height="250px" />
    </svelte:fragment>
    <svelte:fragment slot="info-access">
      <Placeholder text="Wallet Web Access" height="250px" />
    </svelte:fragment>
    <svelte:fragment slot="faq">
      <Placeholder text="FAQ" height="325px" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" width="1920" height="108px" />
    </svelte:fragment>
  </Template>
</Story>
