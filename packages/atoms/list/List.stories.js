import { types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import List from "@dusk-network/list";

export default {
  title: `Components/Atoms/List`,
  component: List,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: Object.values(types.ATOM.LIST),
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
  type: types.ATOM.LIST.BULLETED,
};
