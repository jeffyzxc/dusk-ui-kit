<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-wizard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Card, { Content } from "@dusk-network/card";
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import Heading from "@dusk-network/heading";
  import Mnemonic from "@dusk-network/mnemonic";
  import { types } from "@dusk-network/helpers";
  import meta from "../../../meta";

  let seed;
  let warning = false;
</script>

<Meta
  title="Pages/Wallet/Access Seed"
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
  argTypes="{meta('templates/wallet-wizard/WalletWizard', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="wizard">
      <Card class="seed-login__wrapper">
        <Content>
          <Breadcrumb class="seed-login__breadcrumb" on:exit="{() => {}}">
            <Item><strong>Enter Your Seed Phrase</strong></Item>
          </Breadcrumb>
          <Heading size="sm" class="seed-login__heading">
            <svelte:fragment slot="icon">
              <Icon name="key-outline" />
            </svelte:fragment>
          </Heading>
          <Mnemonic
            class="seed-login__mnemonic"
            type="{types.MNEMONIC.AUTHENTICATE}"
            on:complete="{(completedSeed) => {
              seed = completedSeed;
            }}"
          />
          {#if warning}
            <Heading size="sm" variant="danger" class="seed-login__heading">
              <strong>Seed phrase does not match!</strong>
            </Heading>
          {/if}
          <Button class="seed-login__cta" variant="cta" disabled="{!seed}" on:click="{() => {}}"
            >Access My Wallet</Button
          >
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
