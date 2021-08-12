<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  import LoadingIndicator from "@dusk-network/loading-indicator";
</script>

<Meta
  title="Components/Atoms/Loading Indicator"
  component="{LoadingIndicator}"
  parameters="{{ layout: 'centered' }}"
  argTypes="{{
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
  }}"
/>

<Template let:args>
  <LoadingIndicator {...args} />
</Template>

<Story name="Single indicator at default duration" args="{{}}" />
<Story name="Single indicator with 8 second duration" args="{{ duration: '8s' }}" />
