<script>
  import { linkTo } from "@storybook/addon-links";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Button, { Label } from "@dusk-network/button";
  import Group from "@dusk-network/group";
  import TextField from "@dusk-network/text-field";
  import PasswordStrength from "@dusk-network/password-strength";
  import * as yup from "yup";

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
  <Control name="confirm_password" width="full" let:id let:state>
    <TextField
      id="{id}"
      state="{state}"
      bind:value="{fields.confirm_password}"
      type="password"
      placeholder="Confirm new password"
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

  <Control width="full">
    <Group align="center">
      <Button variant="brand" outline="{true}" type="submit">
        <Label>Confirm</Label>
      </Button>
    </Group>
  </Control>
</Form>
