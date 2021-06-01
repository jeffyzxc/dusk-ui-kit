import { variants, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import Table from "@dusk-network/table";

export default {
  title: `Components/Atoms/Table`,
  component: Table,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.TABLE),
      },
    },
    size: {
      type: {
        type: "select",
        options: Object.values(types.ATOM.TABLE),
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
  variant: variants.ATOM.TABLE.LIGHT,
  type: types.ATOM.TABLE.BASE,
};
