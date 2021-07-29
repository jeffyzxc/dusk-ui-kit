import { variants } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import DropDown from "@dusk-network/drop-down";

export default {
  title: `Components/Atoms/Drop Down`,
  component: DropDown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.PROGRESS_BAR),
      },
    },
    step: {
      control: {
        type: "number",
      },
    },
    steps: {
      control: {
        type: "number",
      },
    },
  },
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
