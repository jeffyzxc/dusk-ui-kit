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
  import RichText from "@dusk-network/rich-text";
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
        <h2>Access Your Wallet</h2>
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
        <Content align="center">
          <Heading size="lg" align="center" class="wallet-options__heading">
            <svelte:fragment slot="icon">
              <Icon
                class="wallet-options__heading-icon"
                variant="brand"
                size="xxl"
                name="wallet-arrow"
              />
            </svelte:fragment>
            <h1>Access Your Wallet</h1>
          </Heading>
          <div class="wallet-options__option-group">
            <Card class="wallet-options__option-card" href="/access/seed">
              <Content align="center">
                <Icon
                  class="wallet-options__option-icon"
                  size="xxl"
                  name="seed-phrase-outline"
                  viewbox="0 0 28 35"
                />
                <RichText
                  class="wallet-options__option-heading"
                  size="xxl"
                  markdown="**Seed Phrase**"
                />
              </Content>
            </Card>
            <Card class="wallet-options__option-card" href="/access/keystore">
              <Content align="center">
                <Icon
                  class="wallet-options__option-icon"
                  size="xxl"
                  name="keystore-file-outline"
                  viewbox="0 0 28 35"
                />
                <RichText
                  class="wallet-options__option-heading"
                  size="xxl"
                  markdown="**Keystore File**"
                />
              </Content>
            </Card>
            <Card disabled="{true}" class="wallet-options__option-card">
              <Content>
                <Heading class="wallet-options__option-disabled-mobile">
                  <svelte:fragment slot="icon">
                    <Icon name="hardware-outline" />
                  </svelte:fragment>
                  <h1>Hardware</h1>
                </Heading>
                <RichText class="wallet-options__option-disabled" size="xxl" markdown="Planned" />
              </Content>
            </Card>
            <Card disabled="{true}" class="wallet-options__option-card">
              <Content>
                <Heading class="wallet-options__option-disabled-mobile">
                  <svelte:fragment slot="icon">
                    <Icon name="wallet" />
                  </svelte:fragment>
                  <h1>Mobile App</h1>
                </Heading>
                <RichText class="wallet-options__option-disabled" size="xxl" markdown="Planned" />
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
