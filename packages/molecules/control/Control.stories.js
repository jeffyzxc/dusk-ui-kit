import { variants, states, types } from "@dusk-network/helpers";
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
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.MOLECULE.CONTROL),
      },
    },
    state: {
      control: {
        type: "select",
        options: Object.values(states.MOLECULE.CONTROL),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.MOLECULE.CONTROL),
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
  variant: variants.MOLECULE.CONTROL.LIGHT,
  state: states.MOLECULE.CONTROL.SUCCESS,
  type: types.MOLECULE.CONTROL.STACKED,
  placeholder: "I'm Control",
};
