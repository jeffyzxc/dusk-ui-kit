<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { variants } from "@dusk-network/helpers";
  import Accordion, { Item } from "@dusk-network/accordion";
  import Card, {Content} from "@dusk-network/card"
</script>

<Meta
  title="Components/Organisms/Accordion"
  component="{Accordion}"
  parameters="{{ layout: 'padded' }}"
  args="{{
    cardVariant:false
  }}"
  argTypes="{{
    multiselect: {
      table: {
        disable: true,
      },
    },
    cardVariant:{
      control:{
        type:'boolean',
      }
    }
  }}"
/>

<Template let:args>
  {#if args.cardVariant}
  <Card variant='white'>
    <Content>
      <Accordion password="{args.password}">
        <Item title="First Item">First item content...</Item>
        <Item title="Second Item">Second item content...</Item>
        <Item title="Third Item">Third item content...</Item>
        <Item title="Fourth Item">Fourth item content...</Item>
      </Accordion>
    </Content>
  </Card>
  {:else}
  <Accordion password="{args.password}">
    <Item title="First Item">First item content...</Item>
    <Item title="Second Item">Second item content...</Item>
    <Item title="Third Item">Third item content...</Item>
    <Item title="Fourth Item">Fourth item content...</Item>
  </Accordion>
  {/if}
</Template>

<Story name="Standard accordion" args="{{}}" />
<Story name="Accordion in Card" args="{{}}"/>
