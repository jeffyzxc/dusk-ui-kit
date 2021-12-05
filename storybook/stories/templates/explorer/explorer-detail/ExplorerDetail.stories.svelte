<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/explorer-detail";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Explorer/Detail"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/explorer-detail/ExplorerDetail.test.js'],
  }}"
  argTypes="{meta('templates/explorer-detail/ExplorerDetail', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" height="104px" />
    </svelte:fragment>
    <svelte:fragment slot="detail-details">
      <Placeholder text="Detail" height="300px" />
    </svelte:fragment>
    <svelte:fragment slot="detail-list">
      <Placeholder text="List" height="565px" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" height="108px" />
    </svelte:fragment>
  </Template>
</Story>
