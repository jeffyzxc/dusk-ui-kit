<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Card, { Content } from "@dusk-network/card";
  import Wizard from "./_Wizard.svelte";
  import Connection from "../_Connection.svelte";
  import Heading from "./_Heading.svelte";
  import RichText from "@dusk-network/rich-text";
  import Logo from "../_Logo.svelte";
  import Icon from "@dusk-network/icon";
  import { VIEWPORTS } from "../viewports.js";
  import meta from "../../../meta";
</script>

<Meta
  title="Pages/Extension/Connect"
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
    <Heading />
    <Card>
      <Content>
        <Wizard connected="{true}" />
      </Content>
    </Card>
    <svelte:fragment slot="footer">
      <Connection connected="{true}" />
    </svelte:fragment>
  </Template>
</Story>

<Story name="Invalid Connection" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo state="danger" />
    </svelte:fragment>
    <Heading />
    <Card>
      <Content>
        <Wizard connected="{false}" />
      </Content>
    </Card>
    <svelte:fragment slot="footer">
      <Connection connected="{false}" />
    </svelte:fragment>
  </Template>
</Story>

<Story name="Success State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo state="success" />
    </svelte:fragment>
    <Heading />
    <Card>
      <Content align="center">
        <Icon name="wallet-plus" size="xxxl" />
        <RichText>
          <h3>Congratulations!</h3>
          <p>You're all set to start making transactions on Dusk Network.</p>
        </RichText>
      </Content>
    </Card>
    <svelte:fragment slot="footer">
      <Connection connected="{true}" />
    </svelte:fragment>
  </Template>
</Story>
