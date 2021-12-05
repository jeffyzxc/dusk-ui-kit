<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { linkTo } from "@storybook/addon-links";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Heading from "@dusk-network/heading";
  import RichText from "@dusk-network/rich-text";
  import Logo from "../_Logo.svelte";
  import Button, { Label, Group } from "@dusk-network/button";
  import { VIEWPORTS } from "../viewports.js";
  import meta from "../../../meta";
</script>

<Meta
  title="Pages/Extension/Welcome"
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

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo />
    </svelte:fragment>
    <Heading align="center"><h2>Welcome</h2></Heading>
    <RichText>
      <p>
        Please visit <a href="https://wallet.dusk.network">wallet.dusk.network</a>
      </p>
      <p>The extension needs to be linked to your wallet.</p>
    </RichText>
    <svelte:fragment slot="footer">
      <Group align="center">
        <Button
          variant="brand"
          outline="{true}"
          on:click="{linkTo('Pages/Extension/Connection', 'Loaded State')}"
        >
          <Label>Start</Label>
        </Button>
      </Group>
    </svelte:fragment>
  </Template>
</Story>
