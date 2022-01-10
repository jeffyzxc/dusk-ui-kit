<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-wizard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Content from "@dusk-network/content";
  import Card from "@dusk-network/card";
  import Breadcrumb, { Item } from "@dusk-network/breadcrumb";
  import Button from "@dusk-network/button";
  import Icon from "@dusk-network/icon";
  import Group from "@dusk-network/group";
  import Control from "@dusk-network/control";
  import Mnemonic from "@dusk-network/mnemonic";
  import Form from "@dusk-network/form";
  import * as yup from "yup";
  import { types } from "@dusk-network/helpers";
  import { seedPhrase } from "../wallet-create-seed/seed.mock.js";
  import meta from "../../../meta";

  let submitted = false;
  let seed = seedPhrase;
  let disabled = true;
  let valid = false;

  let fields = {
    mnemonic: "",
  };
  let schema = yup.object().shape({
    mnemonic: yup.string().test("mnemonic", "Seed phrase does not match!", function () {
      return valid === true;
    }),
  });

  function validate(arr) {
    if (arr.indexOf("") === -1) {
      disabled = false;
      if (JSON.stringify(seed) === JSON.stringify(arr)) {
        valid = true;
      }
    } else {
      disabled = true;
      valid = false;
    }
  }
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
          <Icon name="key-outline" size="xxl" />
          <Form
            submitted="{submitted}"
            schema="{schema}"
            fields="{fields}"
            submitHandler="{() => {
              submitted = true;
              if (schema.isValidSync(fields)) {
                // goto('/dashboard');
                console.log('link to dashboard');
              }
            }}"
          >
            <Control name="mnemonic" let:id let:state width="full">
              <Mnemonic
                class="seed-login__mnemonic"
                seed="{seedPhrase}"
                type="{types.MNEMONIC.AUTHENTICATE}"
                on:complete="{(completedSeed) => {
                  validate(completedSeed.detail);
                }}"
              />
            </Control>
            <Group align="center">
              <Button variant="cta" disabled="{disabled}" type="submit">Access My Wallet</Button>
            </Group>
          </Form>
        </Content>
      </Card>
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Footer />
    </svelte:fragment>
  </Template>
</Story>
