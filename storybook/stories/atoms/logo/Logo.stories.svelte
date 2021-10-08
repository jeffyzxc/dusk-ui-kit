<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Logo from "@dusk-network/logo";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Atoms/Logo"
  component="{Logo}"
  parameters="{{
    layout: 'centered',
    controls: { disabled: true },
    docs: {
      source: {
        type: 'code',
      },
    },
  }}"
  argTypes="{meta('atoms/logo/Logo', {})}"
/>

<Story name="Basic logo with no context" args="{{}}" let:args>
  <Logo {...args} />
</Story>
