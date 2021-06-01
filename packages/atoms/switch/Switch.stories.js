import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Switch from "@dusk-network/switch";

export default {
  title: `Components/Atoms/Switch`,
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.SWITCH),
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
  variant: variants.ATOM.SWITCH.SUCCESS,
};
