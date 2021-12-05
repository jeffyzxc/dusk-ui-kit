<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/devops-dashboard";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/DevOps/Dashboard"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/devops-dashboard/DevopsDashboard.test.js'],
  }}"
  argTypes="{meta('templates/devops-dashboard/DevopsDashboard', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" height="104px" />
    </svelte:fragment>
    <svelte:fragment slot="map">
      <Placeholder text="Map" height="214px" />
    </svelte:fragment>
    <svelte:fragment slot="node-status">
      <Placeholder text="Node Status" height="214px" />
    </svelte:fragment>
    <svelte:fragment slot="deployed-networks">
      <Placeholder text="Deployed Testnets" height="333px" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" height="108px" />
    </svelte:fragment>
  </Template>
</Story>
