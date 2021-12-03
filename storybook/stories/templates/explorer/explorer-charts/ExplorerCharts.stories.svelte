<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/explorer-charts";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Explorer/Charts"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    // jest: ['packages/templates/explorer-charts/ExplorerCharts.test.js'],
  }}"
  argTypes="{meta('templates/explorer-charts/ExplorerCharts', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" width="{1920}" height="{104}" />
    </svelte:fragment>
    <svelte:fragment slot="charts">
      <Placeholder text="Charts" height="{565}" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" width="{1920}" height="{108}" />
    </svelte:fragment>
  </Template>
</Story>
