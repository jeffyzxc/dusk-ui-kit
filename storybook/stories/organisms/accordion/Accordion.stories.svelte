<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
  import Accordion, { Item } from "@dusk-network/accordion";
  import Card from "@dusk-network/card";
  import Content from "@dusk-network/content";
  import RichText from "@dusk-network/rich-text";
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
    jest: ['packages/organisms/accordion/Accordion.test.js'],
  }}"
  argTypes="{meta('organisms/accordion/Accordion', {})}"
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

<Story name="Accordion inside RichText" args="{{}}">
  <RichText>
    <Accordion>
      <Item title="First Item">First item content...</Item>
      <Item title="Second Item">Second item content...</Item>
      <Item title="Third Item">Third item content...</Item>
      <Item title="Fourth Item">Fourth item content...</Item>
    </Accordion>
  </RichText>
</Story>
