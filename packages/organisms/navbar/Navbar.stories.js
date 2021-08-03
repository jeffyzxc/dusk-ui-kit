import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Navbar from "@dusk-network/navbar";

export default {
  title: `Components/Organisms/Navbar`,
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.NAVBAR),
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
  variant: variants.NAVBAR.BRAND,
};
