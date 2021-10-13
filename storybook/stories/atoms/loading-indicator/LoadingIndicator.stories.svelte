<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import results from "../../../../.jest-test-results.json";
  import { withTests } from "@storybook/addon-jest";
  import { variants } from "@dusk-network/helpers";
  import LoadingIndicator from "@dusk-network/loading-indicator";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Loading Indicator"
  decorators="{[withTests({ results })]}"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
    jest: ['packages/atoms/loading-indicator/LoadingIndicator.test.js'],
  }}"
  component="{LoadingIndicator}"
  argTypes="{meta('atoms/loading-indicator/LoadingIndicator', {
    variant: {
      options: Object.values(variants.LOADING_INDICATOR),
      control: {
        type: 'select',
      },
    },
  })}"
/>

<Story name="Single indicator at default duration" let:args>
  <LoadingIndicator {...args} />
</Story>
<Story name="Single indicator with 8 second duration" args="{{ duration: '8s' }}" let:args>
  <LoadingIndicator {...args} />
</Story>
