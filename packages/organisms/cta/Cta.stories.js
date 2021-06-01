import Default from "./storybook-views/Default.svelte";
import Cta from "@dusk-network/cta";

export default {
  title: `Components/Organisms/Cta`,
  component: Cta,
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
Basic.args = {
  buttonText: "This is a call to Action button",
  heading: "I'm a heading",
  href: "https://dusk.network/",
};
