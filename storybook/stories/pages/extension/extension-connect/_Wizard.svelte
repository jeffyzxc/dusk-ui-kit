<script>
  import { linkTo } from "@storybook/addon-links";
  // import { action } from "@storybook/addon-actions";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Button, { Label, Group } from "@dusk-network/button";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Mnemonic from "@dusk-network/mnemonic";
  import TextField from "@dusk-network/text-field";
  import Heading from "@dusk-network/heading";
  import PasswordStrength from "@dusk-network/password-strength";
  import { seedPhrase } from "../../../molecules/mnemonic/data.js";
  import * as yup from "yup";

  export let connected = false;

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

<Wizard
  variant="brand"
  stepCount="{2}"
  on:exit="{linkTo('Pages/Extension/Authentication', 'Loaded State')}"
  let:next
>
  <Step number="{1}">
    <Heading>
      <strong>Your seed phrase</strong>
    </Heading>
    <Mnemonic seed="{seedPhrase}" type="authenticate" disabled="{!connected}" />
    <Group align="center">
      <Button
        disabled="{!connected}"
        outline="{true}"
        on:click="{() => {
          next();
        }}">Verify</Button
      >
    </Group>
  </Step>
  <Step number="{2}">
    <Heading>
      <strong>Set password</strong>
    </Heading>
    <Form
      submitted="{submitted}"
      schema="{schema}"
      fields="{fields}"
      submitHandler="{async () => {
        submitted = true;
        if (schema.isValidSync(fields)) {
          linkTo('Pages/Extension/Connection', 'Success State');
        }
      }}"
    >
      <Control name="password" width="full" let:id let:state>
        <TextField
          id="{id}"
          state="{state}"
          bind:value="{fields.password}"
          type="password"
          placeholder="New password"
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
      <Control name="confirm_password" width="full" let:id let:state>
        <TextField
          id="{id}"
          state="{state}"
          bind:value="{fields.confirm_password}"
          type="password"
          placeholder="Confirm new password"
        />
      </Control>

      <Control width="full">
        <Group align="center">
          <Button variant="brand" outline="{true}" type="submit">
            <Label>Confirm</Label>
          </Button>
        </Group>
      </Control>
    </Form>
  </Step>
</Wizard>
