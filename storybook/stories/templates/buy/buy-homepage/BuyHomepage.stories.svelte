<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/buy-homepage";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
</script>

<Meta
  title="Components/Templates/Buy/Homepage"
  component="{Template}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/templates/buy-homepage/BuyHomepage.test.js'],
  }}"
  argTypes="{meta('templates/buy-homepage/BuyHomepage', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="navbar">
      <Placeholder text="Navbar" height="104px" />
    </svelte:fragment>
    <svelte:fragment slot="hero">
      <Placeholder text="Hero" height="135px" />
    </svelte:fragment>
    <svelte:fragment slot="steps">
      <Placeholder text="Steps to buy Dusk" height="565px" />
    </svelte:fragment>
    <svelte:fragment slot="markets">
      <Placeholder text="Where can Dusk be purchased" height="565px" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Placeholder text="Footer" height="108px" />
    </svelte:fragment>
  </Template>
</Story>
