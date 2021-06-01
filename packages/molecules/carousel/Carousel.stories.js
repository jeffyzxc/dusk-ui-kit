import Default from "./storybook-views/Default.svelte";
import Carousel from "@dusk-network/carousel";

export default {
  title: `Components/Molecules/Carousel`,
  component: Carousel,
  parameters: {
    backgrounds: { default: "dark" },
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
