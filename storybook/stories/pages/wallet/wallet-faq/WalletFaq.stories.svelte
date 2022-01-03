<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/explorer-list";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Heading from "@dusk-network/heading";
  import Accordion, { Item } from "@dusk-network/accordion";
  import RichText from "@dusk-network/rich-text";
  import meta from "../../../meta";
</script>

<Meta
  title="Pages/Wallet/FAQ"
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
    // jest: ['packages/templates/explorer-list/ExplorerList.test.js'],
  }}"
  argTypes="{meta('templates/explorer-list/ExplorerList', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="list">
      <Card>
        <Heading><h2>FAQs</h2></Heading>
        <Content>
          <Accordion>
            <Item title="What is demo mode?">
              <RichText>
                <p>
                  Demo mode is an experimental lab. We use it to share state-of-the-art applications
                  built for Dusk Network. While you’re here, please let us know how we can do better
                  and help us build the future of decentralised applications.
                </p>
              </RichText>
            </Item>
            <Item title="How can I send a transaction?">
              <p>
                Demo mode is an experimental lab. We use it to share state-of-the-art applications
                built for Dusk Network. While you’re here, please let us know how we can do better
                and help us build the future of decentralised applications.
              </p>
            </Item>
            <Item title="I forgot my password/keystore file/mnemonic phrase! What can I do?">
              <p>
                Demo mode is an experimental lab. We use it to share state-of-the-art applications
                built for Dusk Network. While you’re here, please let us know how we can do better
                and help us build the future of decentralised applications.
              </p>
            </Item>
            <Item title="How can I send a transaction?">
              <p>
                Demo mode is an experimental lab. We use it to share state-of-the-art applications
                built for Dusk Network. While you’re here, please let us know how we can do better
                and help us build the future of decentralised applications.
              </p>
            </Item>
            <Item title="How can I send a transaction?">
              <p>
                Demo mode is an experimental lab. We use it to share state-of-the-art applications
                built for Dusk Network. While you’re here, please let us know how we can do better
                and help us build the future of decentralised applications.
              </p>
            </Item>
            <Item title="How can I send a transaction?">
              <p>
                Demo mode is an experimental lab. We use it to share state-of-the-art applications
                built for Dusk Network. While you’re here, please let us know how we can do better
                and help us build the future of decentralised applications.
              </p>
            </Item>
          </Accordion>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
