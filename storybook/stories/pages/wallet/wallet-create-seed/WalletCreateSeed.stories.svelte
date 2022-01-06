<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-wizard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import { seedPhrase } from "./seed.mock.js"; // TODO Replace with call to seed phrase.
  import Button from "@dusk-network/button";
  import RichText from "@dusk-network/rich-text";
  import Icon from "@dusk-network/icon";
  import Heading from "@dusk-network/heading";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Toggle from "@dusk-network/toggle";
  import Control from "@dusk-network/control";
  import Mnemonic from "@dusk-network/mnemonic";
  import ProgressBar from "@dusk-network/progress-bar";
  import { types } from "@dusk-network/helpers";
  import meta from "../../../meta";

  let stepTitles = ["Seed Phrase Generation", "Seed Phrase Verification", ""];
  let currentStep;

  let agreement = {
    checkbox1: false,
    checkbox2: false,
  };
  let noOfSteps = 3;
  let continueDisabled = true;

  $: check = checkAgreement(agreement);

  function checkAgreement(item) {
    let arr = Object.values(item);
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        return false;
      }
    }
    return true;
  }
</script>

<Meta
  title="Pages/Wallet/Create Seed"
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
      <Card class="seed-phrase__wrapper">
        <Content>
          <Wizard
            stepCount="{noOfSteps}"
            on:exit="{() => {}}"
            on:step="{(event) => (currentStep = event.detail - 1)}"
          >
            <h3 slot="title">{stepTitles[currentStep]}</h3>
            <div slot="progress-bar" let:steps let:step>
              <ProgressBar steps="{steps}" step="{step}" />
            </div>
            <Step number="{1}" let:next>
              <Heading size="sm" class="seed-phrase__generator">
                <svelte:fragment slot="icon">
                  <Icon name="key-outline" />
                </svelte:fragment>
                <h1>Your seed Phrase</h1>
                <svelte:fragment slot="button">
                  <Button variant="brand">
                    <Icon variant="default" size="lg" name="dice-multiple-outline" />
                  </Button>
                </svelte:fragment>
              </Heading>

              <RichText>
                <p>
                  <span>Copy</span> these words in the order given below and <span>store</span> them
                  securely.
                </p>
              </RichText>

              <Mnemonic class="seed-phrase__mnemonic" seed="{seedPhrase}" />

              <Heading size="sm" variant="danger">
                <svelte:fragment slot="icon">
                  <Icon name="alert-outline" />
                </svelte:fragment>
                <strong>Never share your seed phrase with anyone.</strong>
              </Heading>

              <Button class="seed-phrase__cta" variant="cta" on:click="{next}">Continue</Button>
            </Step>

            <Step number="{2}" let:next>
              <Heading size="sm" class="seed-phrase__generator">
                <svelte:fragment slot="icon">
                  <Icon name="key-outline" />
                </svelte:fragment>
                <h1>Your seed Phrase</h1>
              </Heading>

              <RichText>
                <p>Tap or click the words to put them next to each other in the correct order.</p>
              </RichText>

              <Mnemonic
                class="seed-phrase__mnemonic"
                seed="{seedPhrase}"
                type="{types.MNEMONIC.CONFIRM}"
                on:passed="{() => {
                  continueDisabled = false;
                }}"
              />

              <Button
                class="seed-phrase__cta"
                variant="cta"
                disabled="{!continueDisabled}"
                on:click="{next}"
              >
                Continue
              </Button>
            </Step>
            <Step number="{3}">
              <Heading size="sm" variant="danger">
                <svelte:fragment slot="icon">
                  <Icon name="alert-outline" />
                </svelte:fragment>
                <strong>Securely store your seed phrase!</strong>
              </Heading>

              <RichText>
                <p>Your seed phrase provides access to your wallet.</p>
              </RichText>

              <Control width="full">
                <Toggle
                  type="checkbox"
                  on:click="{() => (agreement.checkbox1 = !agreement.checkbox1)}"
                >
                  I understand that without my seed phrase I cannot access my wallet and its assets.
                </Toggle>
              </Control>

              <Control width="full">
                <Toggle
                  type="checkbox"
                  on:click="{() => (agreement.checkbox2 = !agreement.checkbox2)}"
                >
                  I understand that securing my recovery phrase is my own responsibility. Only I
                  have access to my recovery phrase.
                </Toggle>
              </Control>

              <Button
                class="seed-phrase__cta"
                variant="cta"
                disabled="{!check}"
                on:click="{() => {}}">Continue</Button
              >
              <img class="seed-phrase__image" src="/images/wallet-introduction.png" alt="" />
            </Step>
          </Wizard>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
