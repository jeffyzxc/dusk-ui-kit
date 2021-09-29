<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Accordion, { Item } from "@dusk-network/accordion";
  import Card, { Content } from "@dusk-network/card";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Organisms/Accordion"
  component="{Accordion}"
  parameters="{{
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
  }}"
  argTypes="{meta('accordion/Accordion', {
    multiselect: {
      table: {
        disable: false,
      },
    },
  })}"
/>

<Story name="Standard accordion" args="{{}}" let:args>
  <Accordion>
    <Item title="First Item">First item content...</Item>
    <Item title="Second Item">Second item content...</Item>
    <Item title="Third Item">Third item content...</Item>
    <Item title="Fourth Item">Fourth item content...</Item>
  </Accordion>
</Story>

<Story name="Accordion inside Card" args="{{}}">
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
</Story>
