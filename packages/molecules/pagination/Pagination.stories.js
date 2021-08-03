import Default from "./storybook-views/Default.svelte";
import Pagination from "@dusk-network/pagination";

export default {
  title: `Components/Molecules/Pagination`,
  component: Pagination,
  parameters: {
    layout: "centered",
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
