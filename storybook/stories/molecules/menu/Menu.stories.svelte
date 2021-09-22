<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { orientations } from "@dusk-network/helpers";
  import Menu, { Item } from "@dusk-network/menu";
  import meta from "../../meta.js";
</script>

<Meta
  title="Components/Molecules/Menu"
  component="{Menu}"
  parameters="{{ 
    layout: 'padded',
    docs: {
      source: {
        type: 'code',
      },
    },
  }}"
  argTypes="{meta('menu/Menu',{
    orientation: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
  })}"
/>

<Story
  name="Horizontally stacked menu with no context"
  args="{{ orientation: orientations.MENU.HORIZONTAL }}"
  let:args
>
  <Menu {...args}>
    <Item href="javascript:;">Link 1</Item>
    <Item href="javascript:;">Link 2</Item>
    <Item>No Link</Item>
  </Menu>
</Story>


<Story
  name="Vertically stacked menu with no context"
  args="{{ orientation: orientations.MENU.VERTICAL }}"
  let:args
>
  <Menu {...args}>
    <Item href="javascript:;">Link 1</Item>
    <Item href="javascript:;">Link 2</Item>
    <Item>No Link</Item>
  </Menu>
</Story>
