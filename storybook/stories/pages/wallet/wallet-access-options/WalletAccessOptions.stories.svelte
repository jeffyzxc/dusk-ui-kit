<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-option";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Button from "@dusk-network/button";
  import Card, { Content } from "@dusk-network/card";
  import Icon from "@dusk-network/icon";
  import Heading from "@dusk-network/heading";
  import meta from "../../../meta";
</script>

<Meta
  title="Pages/Wallet/Access Options"
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
  argTypes="{meta('templates/wallet-option/WalletOption', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="heading-mobile">
      <Heading class="wallet-options__heading--mobile">
        <svelte:fragment slot="icon">
          <Icon
            class="wallet-options__heading-icon"
            variant="brand"
            size="xxl"
            name="wallet-plus"
          />
        </svelte:fragment>
        <h2><strong>Access Your Wallet</strong></h2>
      </Heading>
    </svelte:fragment>
    <svelte:fragment slot="lead-question">
      <Button class="lead-question__cta" variant="cta" href="/create">
        <svelte:fragment slot="labelLeft">
          <h4>Don't have a wallet</h4>
        </svelte:fragment>
        Create a wallet
      </Button>
    </svelte:fragment>
    <svelte:fragment slot="option">
      <Card>
        <Content>
          <Heading align="center" class="wallet-options__heading">
            <svelte:fragment slot="icon">
              <Icon
                class="wallet-options__heading-icon"
                variant="brand"
                size="xxl"
                name="wallet-arrow"
              />
            </svelte:fragment>
            <h2>Access Your Wallet</h2>
          </Heading>
          <div class="wallet-options__option-group">
            <Card class="wallet-options__option-card" href="/access/seed">
              <Content>
                <img class="wallet-options__option-icon" src="/seed.svg" alt="Seed Phrases" />
                <Heading align="center" class="wallet-options__option-heading"
                  ><strong>Seed Phrase</strong></Heading
                >
              </Content>
            </Card>
            <Card class="wallet-options__option-card" href="/access/keystore">
              <Content>
                <img class="wallet-options__option-icon" src="/keystore.svg" alt="Keystore File" />
                <Heading align="center" class="wallet-options__option-heading"
                  ><strong>Keystore File</strong></Heading
                >
              </Content>
            </Card>
            <Card disabled="{true}" class="wallet-options__option-card">
              <Content>
                <Heading size="sm" class="wallet-options__option-heading--disabled-mobile">
                  <svelte:fragment slot="icon">
                    <img src="/hardware.png" alt="Hardware" />
                  </svelte:fragment>
                  <strong>Hardware</strong>
                </Heading>
                <Heading
                  class="wallet-options__option-heading wallet-options__option-heading--disabled"
                >
                  <strong>Planned</strong>
                </Heading>
              </Content>
            </Card>
            <Card disabled="{true}" class="wallet-options__option-card">
              <Content>
                <Heading size="sm" class="wallet-options__option-heading--disabled-mobile">
                  <svelte:fragment slot="icon">
                    <Icon name="wallet" />
                  </svelte:fragment>
                  <strong>Mobile App</strong>
                </Heading>
                <Heading
                  class="wallet-options__option-heading wallet-options__option-heading--disabled"
                >
                  <strong>Planned</strong>
                </Heading>
              </Content>
            </Card>
          </div>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
