import { variants, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Toggle from "@dusk-network/toggle";

export default {
  title: `Components/Atoms/Toggle`,
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.TOGGLE),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.ATOM.TOGGLE),
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
  variant: variants.ATOM.TOGGLE.DEFAULT,
  type: types.ATOM.TOGGLE.SWITCH,
};
