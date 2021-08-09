import DefaultView from "./storybook-views/Default.svelte";
import Breadcrumb from "@dusk-network/breadcrumb";

export default {
  title: `Components/Molecules/Breadcrumb`,
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

const Template = (args) => ({
  Component: DefaultView,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {};
