<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Template from "@dusk-network/extension-default";
  // import results from "../../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import meta from "../../../meta";
  import Placeholder from "../../_Placeholder.svelte";
  import { VIEWPORTS } from "../viewports.js";
</script>

<Meta
  title="Components/Templates/Extension/Welcome"
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
    // jest: ['packages/templates/devops-dashboard/DevopsDashboard.test.js'],
  }}"
  argTypes="{meta('templates/extension-default/ExtensionDefault', {})}"
/>

<Story name="Loaded State" args="{{}}" let:args>
  <Template>
    <svelte:fragment slot="logo">
      <Placeholder text="Logo" height="94px" />
    </svelte:fragment>
    <Placeholder text="Welcome message" height="113px" />
    <svelte:fragment slot="footer">
      <Placeholder text="CTA" height="70px" />
    </svelte:fragment>
  </Template>
</Story>
