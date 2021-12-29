<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-homepage";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Card, { Content } from "@dusk-network/card";
  import RichText from "@dusk-network/rich-text";
  import Heading from "@dusk-network/heading";
  import Icon from "@dusk-network/icon";
  import Hero from "@dusk-network/hero";
  import Accordion, { Item } from "@dusk-network/accordion";
  import { states } from "@dusk-network/helpers";
  import meta from "../../../meta";
</script>

<Meta
  title="Pages/Wallet/Homepage"
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
    // jest: ['packages/templates/wallet-homepage/WalletHomepage.test.js'],
  }}"
  argTypes="{meta('templates/wallet-homepage/WalletHomepage', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Navbar />
    </svelte:fragment>
    <svelte:fragment slot="hero">
      <Hero>
        <div slot="introduction">
          <RichText>
            <h2>Dusk Network’s Official Web Wallet</h2>
            <p>
              Quickly access your wallet, view your balance, send and receive DUSK, and other
              tokens.
            </p>
          </RichText>
          <Heading>
            <h3>
              <strong
                >Discover Dusk Network: the privacy blockchain for financial applications.</strong
              >
            </h3>
          </Heading>
        </div>
        <div slot="image">
          <img src="../wallet-intro.png" alt="Wallet Introduction" />
        </div>
      </Hero>
    </svelte:fragment>
    <svelte:fragment slot="cta-create">
      <Card class="cta__card" href="/create" state="{states.CARD.PASSED}">
        <Content>
          <Heading size="lg">
            <svelte:fragment slot="icon">
              <Icon name="wallet-plus" />
            </svelte:fragment>
            <RichText>
              <h4>Create New Wallet</h4>
            </RichText>
          </Heading>
          <RichText size="lg">
            <p>
              Create a new wallet. Unlock the ability to transact, and choose your preferred method
              to access and recover your wallet.
            </p>
          </RichText>
          <RichText size="xxl">
            <p>
              <strong>Get Started</strong>
            </p>
          </RichText>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="cta-access">
      <Card class="cta__card" href="/access">
        <Content>
          <Heading size="lg">
            <svelte:fragment slot="icon">
              <Icon name="wallet-arrow" viewbox="0 0 53 51" />
            </svelte:fragment>
            <RichText>
              <h4>Access My Wallet</h4>
            </RichText>
          </Heading>
          <RichText size="lg">
            <p>
              Access your wallet. Send and receive DUSK and tokens, interact with privacy-friendly
              smart contracts, and more!
            </p>
          </RichText>
          <RichText size="xl">
            <p>
              <strong>Access Now</strong>
            </p>
          </RichText>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="about-dusk">
      <div class="banner-layout">
        <div class="banner-layout__wrapper">
          <h2 class="banner-layout__heading">About DuskWallet</h2>
          <p class="banner-layout__text">
            DuskWallet gives you the power to interact with the Dusk Network Blockchain. It's a
            free, client-side interface, designed to provide users with a meaningful and relevant
            user experience.
          </p>
        </div>
      </div>
    </svelte:fragment>
    <svelte:fragment slot="info-security">
      <Card class="usp__card">
        <Content>
          <img
            class="usp__image usp__image--security"
            src="../security-icon.png"
            alt="web access"
          />
          <Heading align="center" size="lg"><strong>Security</strong></Heading>
          <RichText>
            <p>
              DuskWallet is open-source and secure. With DuskWallet you are your own bank and you
              are responsible for keeping your assets safe. Dusk Network can NEVER access or have
              control over your DUSK.
            </p>
          </RichText>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="info-access">
      <Card class="usp__card">
        <Content>
          <img
            class="usp__image usp__image--access"
            src="../web-access-icon.png"
            alt="web access"
          />
          <Heading align="center" size="lg"><strong>Web Access</strong></Heading>
          <RichText>
            <p>
              Creating a new wallet is simple and convenient. Get started within minutes, access
              your wallet, view your balance, and send & receive DUSK and Dusk Network-based tokens.
            </p>
          </RichText>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="faq">
      <Heading>
        <h1>FAQs</h1>
      </Heading>
      <div class="faq__block">
        <RichText class="faq__block-wrapper">
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
          </Accordion>
        </RichText>
      </div>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
