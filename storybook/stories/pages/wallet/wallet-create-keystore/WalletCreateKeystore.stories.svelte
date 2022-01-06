<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/wallet-wizard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Navbar from "../_Navbar.svelte";
  import Footer from "../_Footer.svelte";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Button from "@dusk-network/button";
  import Heading from "@dusk-network/heading";
  import RichText from "@dusk-network/rich-text";
  import Toggle from "@dusk-network/toggle";
  import TextField from "@dusk-network/text-field";
  import Icon from "@dusk-network/icon";
  import Control from "@dusk-network/control";
  import PasswordStrength from "@dusk-network/password-strength";
  import Form from "@dusk-network/form";
  import DisclaimerList, { Item } from "@dusk-network/disclaimer-list";
  import ProgressBar from "@dusk-network/progress-bar";
  import * as yup from "yup";
  import meta from "../../../meta";

  let agreement = false;
  let submitted = false;
  let passwordStrength;

  let fields = {
    password: "",
    confirm_password: "",
  };

  let schema = yup.object().shape({
    password: yup
      .string()
      .required()
      .label("Password")
      .test("password-strength", "Password is not strong enough", function () {
        return passwordStrength > 2;
      }),
    confirm_password: yup
      .string()
      .required()
      .label("Password confirmation")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });
</script>

<Meta
  title="Pages/Wallet/Create Keystore"
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
      <Card class="keystore__wrapper">
        <Content>
          <Wizard stepCount="{3}" on:exit="{() => {}}">
            <div slot="progress-bar" let:steps let:step>
              <ProgressBar steps="{steps}" step="{step}" />
            </div>
            <Step number="{1}" let:next>
              <Heading size="sm" class="keystore__heading--centered">
                <svelte:fragment slot="icon">
                  <Icon name="key-outline" />
                </svelte:fragment>
                <h1>Choose Your password</h1>
              </Heading>
              <Form
                submitted="{submitted}"
                schema="{schema}"
                fields="{fields}"
                submitHandler="{() => {
                  submitted = true;
                  if (schema.isValidSync(fields)) {
                    next();
                  }
                }}"
              >
                <Control width="full" name="password" let:id let:state>
                  <TextField
                    type="password"
                    placeholder="Password"
                    state="{state}"
                    bind:value="{fields.password}"
                    id="{id}"
                  />
                </Control>
                <Control width="full" name="confirm_password" let:id let:state>
                  <TextField
                    type="password"
                    placeholder="Confirm Password"
                    state="{state}"
                    bind:value="{fields.confirm_password}"
                    id="{id}"
                  />
                </Control>
                <Control width="full" let:id>
                  <PasswordStrength
                    id="{id}"
                    password="{fields.password}"
                    on:strength="{(event) => {
                      passwordStrength = event.detail;
                    }}"
                  >
                    <strong>Password strength: </strong>
                  </PasswordStrength>
                </Control>
                <Control width="full" class="keystore__cta">
                  <Button type="submit" variant="cta">Proceed</Button>
                </Control>
              </Form>
            </Step>
            <Step number="{2}" let:next>
              <DisclaimerList>
                <svelte:fragment slot="heading">
                  <Heading variant="danger">
                    <svelte:fragment slot="icon">
                      <Icon variant="danger" name="alert-outline" />
                    </svelte:fragment>
                    <h1>Warning</h1>
                  </Heading>
                </svelte:fragment>
                <Item>
                  <svelte:fragment slot="icon">
                    <Icon name="safe" size="xxxl" variant="danger" />
                  </svelte:fragment>
                  <RichText size="sm">
                    <h2>Don't Lose It</h2>
                    <p>If you lose your keystore file, your wallet will be lost.</p>
                  </RichText>
                </Item>
                <Item>
                  <svelte:fragment slot="icon">
                    <Icon name="eye-outline" size="xxxl" variant="danger" />
                  </svelte:fragment>
                  <RichText size="sm">
                    <h2>Don't Share It</h2>
                    <p>
                      Anyone with your keystore file can access your funds.<br /> Beware of malicious
                      phishing sites.
                    </p>
                  </RichText>
                </Item>
                <Item>
                  <svelte:fragment slot="icon">
                    <Icon name="content-save-alert-outline" size="xxxl" variant="danger" />
                  </svelte:fragment>
                  <RichText size="sm">
                    <h2>Store It Securely</h2>
                    <p>Secure it like the milions of dollars it may one day be worth</p>
                  </RichText>
                </Item>
              </DisclaimerList>
              <div class="keystore__agreement">
                <Toggle type="checkbox" on:click="{() => (agreement = !agreement)}">
                  I understand that I need to keep my keystore file safe, private, and securely
                  stored.
                </Toggle>
              </div>

              <Control width="full" class="keystore__cta">
                <Button variant="cta" disabled="{!agreement}" on:click="{next}">
                  Download Keystore File
                </Button>
              </Control>
            </Step>
            <Step number="{3}">
              <Heading variant="success" class="keystore__heading keystore__heading--centered">
                <svelte:fragment slot="icon">
                  <Icon name="check-circle-outline" />
                </svelte:fragment>
                <strong>Success</strong>
              </Heading>
              <Control width="full" class="keystore__cta">
                <Button variant="cta" on:click="{() => {}}">Access My Wallet</Button>
              </Control>
              <img class="keystore__image" src="/images/wallet-introduction.svg" alt="" />
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
