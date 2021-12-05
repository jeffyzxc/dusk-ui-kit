<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/explorer-homepage";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Explorer/Homepage"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/explorer-homepage/ExplorerHomepage.test.js'],
  }}"
  argTypes="{meta('templates/explorer-homepage/ExplorerHomepage', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" height="104px" />
    </svelte:fragment>
    <svelte:fragment slot="control-panel">
      <Placeholder text="Control Panel" height="135px" />
    </svelte:fragment>
    <svelte:fragment slot="latest-blocks">
      <Placeholder text="Latest Blocks" height="565px" />
    </svelte:fragment>
    <svelte:fragment slot="latest-transactions">
      <Placeholder text="Latest Transactions" height="565px" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" height="108px" />
    </svelte:fragment>
  </Template>
</Story>
