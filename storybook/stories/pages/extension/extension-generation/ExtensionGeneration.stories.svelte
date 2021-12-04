<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { linkTo } from "@storybook/addon-links";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import RichText from "@dusk-network/rich-text";
  import Logo from "../_Logo.svelte";
  import Icon from "@dusk-network/icon";
  import ProgressBar from "@dusk-network/progress-bar";
  import Button, { Label } from "@dusk-network/button";
  import meta from "../../../meta";

  let displayKey = false;
</script>

<Meta
  title="Pages/Extension/Key Generation"
  component="{Template}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    // jest: ['packages/templates/devops-dashboard/DevopsDashboard.test.js'],
  }}"
  argTypes="{meta('templates/default/Default', {})}"
/>

<Story name="Loading State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo />
    </svelte:fragment>
    <Icon name="timer-sand" /> Generating Key
    <svelte:fragment slot="footer">
      <ProgressBar variant="brand" steps="{2}" step="{1}" />
    </svelte:fragment>
  </Template>
</Story>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo />
    </svelte:fragment>
    <Icon variant="success" name="check-decagram-outline" />
    Your key is ready
    <Icon name="eye-outline" on:click="{() => (displayKey = !displayKey)}" />
    {#if displayKey}
      <RichText>
        <pre>
          <code>
            000000000000000000000000dfc1d851c198f925eaf33c540a682640b730d16fa37bfc38f196182200000a37bfc38f196182200000a37bfc38f196182200000a37bfc38f196182200000a37bfc38f196182200000a3737bfc38f196182200000a37bfc38f196182200000a3
          </code>  
        </pre>
      </RichText>
    {/if}
    <svelte:fragment slot="footer">
      <Button
        outline="{true}"
        variant="brand"
        on:click="{linkTo('Pages/Extension/Generate Key', 'Loading State')}"
      >
        <Label>Generate a new key</Label>
      </Button>
    </svelte:fragment>
  </Template>
</Story>

<Story name="Error State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo state="danger" />
    </svelte:fragment>
    <Icon variant="danger" name="alert-outline" /> Something went wrong
    <svelte:fragment slot="footer">
      <Button
        outline="{true}"
        variant="brand"
        on:click="{linkTo('Pages/Extension/Generate Key', 'Loading State')}"
      >
        <Label>Generate key</Label>
      </Button>
    </svelte:fragment>
  </Template>
</Story>
