import Default from "./storybook-views/Default.svelte";
import Limiter from "@dusk-network/limiter";

export default {
  title: `Components/Molecules/Limiter`,
  component: Limiter,
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
