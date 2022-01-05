<script>
  import { linkTo } from "@storybook/addon-links";
  // import { action } from "@storybook/addon-actions";
  import Button from "@dusk-network/button";
  import Group from "@dusk-network/group";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Mnemonic from "@dusk-network/mnemonic";
  import Heading from "@dusk-network/heading";
  import CreatePassword from "../_CreatePassword.svelte";
  import Disclaimer from "../_Disclaimer.svelte";
  import { seedPhrase } from "../../../molecules/mnemonic/data.js";
</script>

<Wizard
  variant="brand"
  stepCount="{4}"
  on:exit="{linkTo('Pages/Extension/Authentication', 'Loaded State')}"
  let:next
>
  <Step number="{1}">
    <Heading size="sm">
      <strong>Your seed phrase</strong>
    </Heading>
    <Mnemonic seed="{seedPhrase}" type="preview" />
    <Group align="center">
      <Button
        outline="{true}"
        on:click="{() => {
          next();
        }}">Continue</Button
      >
    </Group>
  </Step>
  <Step number="{2}">
    <Heading size="sm">
      <strong>Your seed phrase</strong>
    </Heading>
    <Mnemonic seed="{seedPhrase}" type="confirm" />
    <Group align="center">
      <Button
        outline="{true}"
        on:click="{() => {
          next();
        }}">Continue</Button
      >
    </Group>
  </Step>
  <Step number="{3}">
    <Heading size="sm">
      <strong>Securely store your seed phrase!</strong>
    </Heading>
    <Disclaimer />
    <Group align="center">
      <Button
        outline="{true}"
        on:click="{() => {
          next();
        }}">Continue</Button
      >
    </Group>
  </Step>
  <Step number="{4}">
    <Heading size="sm">
      <strong>Set password</strong>
    </Heading>
    <CreatePassword />
  </Step>
</Wizard>
