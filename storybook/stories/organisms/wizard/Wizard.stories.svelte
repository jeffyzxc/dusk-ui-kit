<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Wizard, { Step } from "@dusk-network/wizard";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  // import RichText from "@dusk-network/rich-text";
  // import Icon from "@dusk-network/icon";
  // import Heading from "@dusk-network/heading";
  // import Button, { Group } from "@dusk-network/button";
  import meta from "../../meta";
</script>

<Meta
  title="Components/Organisms/Wizard"
  component="{Wizard}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/organisms/wizard/Wizard.test.js'],
  }}"
  argTypes="{meta('organisms/wizard/Wizard', {})}"
/>

<Story name="Default Wizard" args="{{}}" let:args>
  <Wizard stepCount="{2}">
    <Step number="{1}">step 1</Step>
    <Step number="{2}">step 2</Step>
  </Wizard>
</Story>

<Story name="Default Wizard with title" args="{{}}" let:args>
  <Wizard stepCount="{2}">
    <h3 slot="title">Wizard title</h3>
    <Step number="{1}">step 1</Step>
    <Step number="{2}">step 2</Step>
  </Wizard>
</Story>
