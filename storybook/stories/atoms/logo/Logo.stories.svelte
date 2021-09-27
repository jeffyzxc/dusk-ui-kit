<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Logo from "@dusk-network/logo";
</script>

<Meta
  title="Components/Atoms/Logo"
  component="{Logo}"
  parameters="{{ layout: 'centered', controls: { disabled: true } }}"
/>

<Template let:args>
  <Logo {...args} />
</Template>

<Story name="Basic logo with no context" args="{{}}" />
