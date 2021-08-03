import { types } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import DefinitionView from "./storybook-views/Definition.svelte";
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
        options: Object.values(types.LIST),
      },
    },
  },
};

const DefaultTemplate = (args) => ({
  Component: DefaultView,
  props: {
    ...args,
  },
});

const DefinitionTemplate = (args) => ({
  Component: DefinitionView,
  props: {
    ...args,
  },
});

export const Basic = DefaultTemplate.bind({});
Basic.args = {
  type: types.LIST.BULLETED,
};

export const Definition = DefinitionTemplate.bind({});
Definition.args = {
  type: types.LIST.DEFINITION,
};
