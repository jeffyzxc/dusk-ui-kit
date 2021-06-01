import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Dialog from "@dusk-network/dialog";

export default {
  title: `Components/Molecules/Dialog`,
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.MOLECULE.DIALOG),
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
  variant: variants.MOLECULE.DIALOG.BRAND,
};
