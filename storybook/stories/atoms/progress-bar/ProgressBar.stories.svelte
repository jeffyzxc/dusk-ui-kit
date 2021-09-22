<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  import ProgressBar from "@dusk-network/progress-bar";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Progress Bar"
  parameters="{{ 
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
  }}"
  component="{ProgressBar}"
  argTypes="{meta('progress-bar/ProgressBar',{
    variant: {
      options: Object.values(variants.PROGRESS_BAR),
      control: {
        type: 'select',
      },
    },
    step: {
      control: {
        type: 'number',
      },
    },
    steps: {
      control: {
        type: 'number',
      },
    },
  })}"
/>

<Story
  name="Basic progress bar with no context"
  args="{{
    variant: variants.PROGRESS_BAR.BRAND,
    step: 2,
    steps: 5,
  }}"
  let:args
>
  <ProgressBar {...args} />
</Story>
