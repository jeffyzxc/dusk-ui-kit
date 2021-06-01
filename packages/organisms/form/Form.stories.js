import { variants, states, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Form from "@dusk-network/form";

export default {
  title: `Components/Organisms/Form`,
  component: Form,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ORGANISM.FORM),
      },
    },
    state: {
      control: {
        type: "select",
        options: Object.values(states.ORGANISM.FORM),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.ORGANISM.FORM),
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
  variant: variants.ORGANISM.FORM.DARK,
  state: states.ORGANISM.FORM.DANGER,
  type: types.ORGANISM.FORM.STACKED,
};
