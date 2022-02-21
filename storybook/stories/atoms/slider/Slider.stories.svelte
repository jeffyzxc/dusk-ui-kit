<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Slider from "@dusk-network/slider";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Slider"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/slider/Slider.test.js'],
  }}"
  component="{Slider}"
  argTypes="{meta('atoms/slider/Slider', {})}"
/>

<Story
  name="Default"
  args="{{
    min: 1,
    max: 100,
  }}"
  let:args
>
  <Slider {...args} />
</Story>
