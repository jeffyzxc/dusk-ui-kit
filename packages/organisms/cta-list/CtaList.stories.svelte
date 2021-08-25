<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CtaList from "@dusk-network/cta-list";

</script>

<Meta
  title="Components/Organisms/CtaList"
  component="{CtaList}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{ }}"
/>

<Template let:args>

</Template>

<Story name="Default" args="{{}}" />
<Story name="Grants homepage example" args="{{}}" />
