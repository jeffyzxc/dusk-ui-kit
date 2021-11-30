<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { orientations } from "@dusk-network/helpers";
  // import results from "../../../../.jest-test-results.json";
  // import { withTests } from "@storybook/addon-jest";
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
    jest: ['packages/molecules/menu/Menu.test.js'],
  }}"
  argTypes="{meta('molecules/menu/Menu', {})}"
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
