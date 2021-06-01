import Default from "./storybook-views/Default.svelte";
import RichText from "@dusk-network/rich-text";

export default {
  title: `Components/Atoms/RichText`,
  component: RichText,
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
  content: "",
};
