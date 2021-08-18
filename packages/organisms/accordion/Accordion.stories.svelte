<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Accordion, { Item } from "@dusk-network/accordion";
</script>

<Meta
  title="Components/Organisms/Accordion"
  component="{Accordion}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
    multiselect: {
      table: {
        disable: true,
      },
    },
  }}"
/>

<Template let:args>
  <Accordion>
    <Item title="First Item">First item content...</Item>
    <Item title="Second Item">Second item content...</Item>
    <Item title="Third Item">Third item content...</Item>
    <Item title="Fourth Item">Fourth item content...</Item>
  </Accordion>
</Template>

<Story name="Standard accordion" args="{{}}" />
