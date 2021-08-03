import { states, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Control from "@dusk-network/control";

export default {
  title: `Components/Molecules/Control`,
  component: Control,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    state: {
      control: {
        type: "select",
        options: Object.values(states.CONTROL),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.CONTROL),
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
Basic.args = {
  state: states.CONTROL.SUCCESS,
  type: types.CONTROL.STACKED,
  placeholder: "I'm Control",
};
