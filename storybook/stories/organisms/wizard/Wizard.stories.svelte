<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  // import { variants, states } from "@dusk-network/helpers";
  import Wizard, { Step } from "@dusk-network/wizard";
  // import RichText from "@dusk-network/rich-text";
  // import Icon from "@dusk-network/icon";
  // import Heading from "@dusk-network/heading";
  // import Button, { Group } from "@dusk-network/button";
  import meta from '../../meta';
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
  }}"
  argTypes="{meta('wizard/Wizard',{})}"
/>

<Story name="Kitchen Skin" args="{{}}" let:args>
  <Wizard stepCount="{2}">
    <Step step="{1}">step 1</Step>
    <Step step="{2}">step 2</Step>
  </Wizard>
</Story>
