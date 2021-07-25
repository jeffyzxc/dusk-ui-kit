import Default from "./storybook-views/Default.svelte";
import Alert from "@dusk-network/alert";
import { variants } from "@dusk-network/helpers";

export default {
  title: `Components/Molecules/Alert`,
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.MOLECULE.ALERT),
      },
    },
    dismissable: {
      control: {
        type: "boolean",
        options: [true, false],
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
