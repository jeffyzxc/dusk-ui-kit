// import { variants, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import Table from "@dusk-network/table";

export default {
  title: `Components/Atoms/Table`,
  component: Table,
  parameters: {
    layout: "padded",
  },
  argTypes: {},
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {};
