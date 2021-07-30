import { orientations } from "@dusk-network/helpers";
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
Basic.args = {};
