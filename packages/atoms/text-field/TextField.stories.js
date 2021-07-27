import { states, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import TextField from "@dusk-network/text-field";

export default {
  title: `Components/Atoms/Text Field`,
  component: TextField,
  argTypes: {
    state: {
      control: {
        type: "radio",
        options: Object.values(states.ATOM.TEXT_FIELD),
      },
    },
    type: {
      control: {
        type: "radio",
        options: Object.values(types.ATOM.TEXT_FIELD),
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
  state: states.ATOM.TEXT_FIELD.BASE,
  type: types.ATOM.TEXT_FIELD.TEXT,
  placeholder: "This is text field",
};
