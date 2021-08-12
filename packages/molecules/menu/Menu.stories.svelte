<!-- import { orientations } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Menu from "@dusk-network/menu";

export default {
  title: `Components/Molecules/Menu`,
  component: Menu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: {
        type: "select",
        options: Object.values(orientations.MENU),
      },
    },
    separator: {
      control: {
        type: "radio",
        options: [null, "dot", "dash", "bar"],
      },
    },
  },
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {}; -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { orientations } from "@dusk-network/helpers";
  import Menu, { Item } from "@dusk-network/menu";
</script>

<Meta
  title="Components/Molecules/Menu"
  component="{Menu}"
  parameters="{{ layout: 'padded' }}"
  argTypes="{{
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
  }}"
/>

<Template let:args>
  <Menu {...args}>
    <Item href="javascript:;">Link 1</Item>
    <Item href="javascript:;">Link 2</Item>
    <Item>No Link</Item>
  </Menu>
</Template>

<Story
  name="Horizontally stacked menu with no context"
  args="{{ orientation: orientations.MENU.HORIZONTAL }}"
/>
<Story
  name="Vertically stacked menu with no context"
  args="{{ orientation: orientations.MENU.VERTICAL }}"
/>
