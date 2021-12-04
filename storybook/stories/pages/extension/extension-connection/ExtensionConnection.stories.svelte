<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Card, { Content } from "@dusk-network/card";
  import Wizard from "./_Wizard.svelte";
  import Logo from "../_Logo.svelte";
  import Icon from "@dusk-network/icon";
  import meta from "../../../meta";
</script>

<Meta
  title="Pages/Extension/Connection"
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

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo />
    </svelte:fragment>
    <Icon name="connection" />
    Connect your wallet
    <Card>
      <Content>
        <Wizard />
      </Content>
    </Card>
    <svelte:fragment slot="footer">
      <Icon name="checkbox-blank-circle" variant="success" />
      Linked to <strong>wallet.dusk.network</strong>
    </svelte:fragment>
  </Template>
</Story>

<Story name="Invalid Connection" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo />
    </svelte:fragment>
    <Icon name="connection" />
    Connect your wallet
    <Card>
      <Content>
        <Wizard disabled="{true}" />
      </Content>
    </Card>
    <svelte:fragment slot="footer">
      <Icon name="checkbox-blank-circle" variant="danger" />
      Not linked to
      <strong><a href="https://wallet.dusk.network" target="_blank">wallet.dusk.network</a></strong>
    </svelte:fragment>
  </Template>
</Story>

<Story name="Success State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Logo />
    </svelte:fragment>
    <Icon name="connection" />
    Connect your wallet
    <Card>
      <Content>
        <Icon name="wallet-plus" size="xxxl" />
        <p>Congratulations!</p>
        <p>You're all set to start making transactions on Dusk Network.</p>
      </Content>
    </Card>
    <svelte:fragment slot="footer">
      <Icon name="checkbox-blank-circle" variant="success" />
      Linked to <strong>wallet.dusk.network</strong>
    </svelte:fragment>
  </Template>
</Story>
