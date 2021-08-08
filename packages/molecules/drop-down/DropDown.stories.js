import DefaultView from "./storybook-views/Default.svelte";
import DropDown from "@dusk-network/drop-down";

export default {
  title: `Components/Molecules/Drop Down`,
  component: DropDown,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

const Template = (args) => ({
  Component: DefaultView,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  options: ["option 1", "option 2", "option 3", "etc..."],
};
