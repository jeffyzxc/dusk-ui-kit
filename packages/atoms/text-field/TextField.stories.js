import { states, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import TextField from "@dusk-network/text-field";

export default {
  title: `Components/Atoms/Text Field`,
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    state: {
      control: {
        type: "select",
        options: Object.values(states.TEXT_FIELD),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.TEXT_FIELD),
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
  state: states.TEXT_FIELD.BASE,
  type: types.TEXT_FIELD.TEXT,
  placeholder: "This is text field",
};
