import Default from "./storybook-views/Default.svelte";
import Accordion from "@dusk-network/accordion";

export default {
  title: `Components/Molecules/Accordion`,
  component: Accordion,
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
