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
        options: Object.values(variants.FORM),
      },
    },
    state: {
      control: {
        type: "select",
        options: Object.values(states.FORM),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.FORM),
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
  variant: variants.FORM.DARK,
  state: states.FORM.DANGER,
  type: types.FORM.STACKED,
};
