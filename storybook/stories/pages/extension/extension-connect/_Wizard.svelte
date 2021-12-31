<script>
  import { linkTo } from "@storybook/addon-links";
  // import { action } from "@storybook/addon-actions";
  import Button, { Group } from "@dusk-network/button";
  import Wizard, { Step } from "@dusk-network/wizard";
  import Mnemonic from "@dusk-network/mnemonic";
  import Heading from "@dusk-network/heading";
  import CreatePassword from "../_CreatePassword.svelte";
  import { seedPhrase } from "../../../molecules/mnemonic/data.js";

  export let connected = false;
</script>

<Wizard
  variant="brand"
  stepCount="{2}"
  on:exit="{linkTo('Pages/Extension/Authentication', 'Loaded State')}"
  let:next
>
  <Step number="{1}">
    <Heading size="sm">
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
    <Heading size="sm">
      <strong>Set password</strong>
    </Heading>
    <CreatePassword />
  </Step>
</Wizard>
