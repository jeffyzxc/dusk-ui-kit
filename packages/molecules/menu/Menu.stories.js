import Default from "./storybook-views/Default.svelte";
import Menu from "@dusk-network/menu";

export default {
  title: `Components/Molecules/Menu`,
  component: Menu,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {};
