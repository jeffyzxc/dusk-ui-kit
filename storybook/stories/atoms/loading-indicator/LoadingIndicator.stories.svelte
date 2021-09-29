<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  import LoadingIndicator from "@dusk-network/loading-indicator";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Loading Indicator"
  parameters="{{
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
      },
    },
  }}"
  component="{LoadingIndicator}"
  argTypes="{meta('loading-indicator/LoadingIndicator', {
    variant: {
      options: Object.values(variants.LOADING_INDICATOR),
      control: {
        type: 'select',
      },
    },
    duration: {
      control: {
        type: 'text',
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
