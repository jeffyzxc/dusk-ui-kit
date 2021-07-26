import Default from "./storybook-views/Default.svelte";
import Logo from "@dusk-network/logo";

export default {
  title: `Components/Atoms/Logo`,
  component: Logo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: {
      control: {
        type: "text",
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
Basic.args = {};
