<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
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
    jest: ['packages/atoms/progress-bar/ProgressBar.test.js'],
  }}"
  component="{ProgressBar}"
  argTypes="{meta('atoms/progress-bar/ProgressBar', {
    variant: {
      options: Object.values(variants.PROGRESS_BAR),
      control: {
        type: 'select',
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
