import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Navbar from "@dusk-network/navbar";

export default {
  title: `Components/Organisms/Navbar`,
  component: Navbar,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ORGANISM.NAVBAR),
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
  variant: variants.ORGANISM.NAVBAR.BRAND,
};
