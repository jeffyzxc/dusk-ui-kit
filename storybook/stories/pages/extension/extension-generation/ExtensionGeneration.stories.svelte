<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { linkTo } from "@storybook/addon-links";
  // import { variants, states } from "@dusk-network/helpers";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Heading from "@dusk-network/heading";
  import RichText from "@dusk-network/rich-text";
  import Logo from "../_Logo.svelte";
  import Icon from "@dusk-network/icon";
  import ProgressBar from "@dusk-network/progress-bar";
  import Button, { Group, Label } from "@dusk-network/button";
  import { VIEWPORTS } from "../viewports.js";
  import meta from "../../../meta";

  let displayKey = false;
</script>

<Meta
  title="Pages/Extension/Key Generation"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    viewport: {
      viewports: VIEWPORTS,
      defaultViewport: 'extension',
    },
    darkMode: {
      stylePreview: false,
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
    <Heading>
      <svelte:fragment slot="icon">
        <Icon name="timer-sand" />
      </svelte:fragment>
      <strong>Generating key</strong>
    </Heading>
    <svelte:fragment slot="footer">
      <ProgressBar variant="brand" steps="{2}" step="{1}" />
    </svelte:fragment>
  </Template>
</Story>

<Story name="Success State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo state="success" />
    </svelte:fragment>
    <Heading>
      <svelte:fragment slot="icon">
        <Icon variant="success" name="check-decagram-outline" />
      </svelte:fragment>
      <strong>Your key is ready</strong>
      <svelte:fragment slot="button">
        <Group>
          {#if displayKey}
            <Button on:click="{() => console.log('copy')}">
              <Icon name="content-copy" />
            </Button>
          {/if}
          <Button on:click="{() => (displayKey = !displayKey)}">
            <Icon name="{displayKey ? 'eye-off-outline' : 'eye-outline'}" />
          </Button>
        </Group>
      </svelte:fragment>
    </Heading>
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
      <Group align="center">
        <Button
          outline="{true}"
          variant="brand"
          on:click="{linkTo('Pages/Extension/Key Generation', 'Loading State')}"
        >
          <Label>Generate a new key</Label>
        </Button>
      </Group>
    </svelte:fragment>
  </Template>
</Story>

<Story name="Error State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo state="danger" />
    </svelte:fragment>
    <Heading>
      <svelte:fragment slot="icon">
        <Icon variant="danger" name="alert-outline" />
      </svelte:fragment>
      <strong>Something went wrong</strong>
    </Heading>
    <svelte:fragment slot="footer">
      <Group align="center">
        <Button
          outline="{true}"
          variant="brand"
          on:click="{linkTo('Pages/Extension/Key Generation', 'Loading State')}"
        >
          <Label>Generate key</Label>
        </Button>
      </Group>
    </svelte:fragment>
  </Template>
</Story>
