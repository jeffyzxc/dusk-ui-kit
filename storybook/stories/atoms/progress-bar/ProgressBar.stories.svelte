<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  import ProgressBar from "@dusk-network/progress-bar";
</script>

<Meta
  title="Components/Atoms/Progress Bar"
  component="{ProgressBar}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
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
  }}"
/>

<Template let:args>
  <ProgressBar {...args} />
</Template>

<Story
  name="Basic progress bar with no context"
  args="{{
    variant: variants.PROGRESS_BAR.BRAND,
    step: 2,
    steps: 5,
  }}"
/>
