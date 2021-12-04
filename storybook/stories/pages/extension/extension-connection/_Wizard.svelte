<script>
  import { linkTo } from "@storybook/addon-links";
  import Form from "@dusk-network/form";
  import Control from "@dusk-network/control";
  import Button, { Label } from "@dusk-network/button";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Mnemonic from "@dusk-network/mnemonic";
  import TextField from "@dusk-network/text-field";
  import { seedPhrase } from "../../../molecules/mnemonic/data.js";
</script>

<Wizard stepCount="{2}" let:next>
  <Step number="{1}">
    <p>Your seed phrase</p>
    <Mnemonic seed="{seedPhrase}" type="authenticate" />
    <Button
      outline="{true}"
      on:click="{() => {
        next();
      }}">Verify</Button
    >
  </Step>
  <Step number="{2}">
    <p>Set password</p>
    <Form>
      <Control width="full">
        <TextField type="password" placeholder="New password" />
      </Control>
      <Control width="full">
        <TextField type="password" placeholder="Confirm password" />
      </Control>
      <Control width="full">
        <Button
          variant="brand"
          outline="{true}"
          on:click="{linkTo('Pages/Extension/Connection', 'Success State')}"
        >
          <Label>Next</Label>
        </Button>
      </Control>
    </Form>
  </Step>
</Wizard>
