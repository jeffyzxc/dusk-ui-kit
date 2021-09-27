<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Accordion, { Item } from "@dusk-network/accordion";
  import Card, { Content } from "@dusk-network/card";
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
  {#if args.cardVariant}
    <Card>
      <Content>
        <Accordion>
          <Item title="First Item">First item content...</Item>
          <Item title="Second Item">Second item content...</Item>
          <Item title="Third Item">Third item content...</Item>
          <Item title="Fourth Item">Fourth item content...</Item>
        </Accordion>
      </Content>
    </Card>
  {:else}
    <Accordion>
      <Item title="First Item">First item content...</Item>
      <Item title="Second Item">Second item content...</Item>
      <Item title="Third Item">Third item content...</Item>
      <Item title="Fourth Item">Fourth item content...</Item>
    </Accordion>
  {/if}
</Template>

<Story name="Standard accordion" args="{{}}" />
<Story name="Accordion inside Card" args="{{ cardVariant: true }}" />
