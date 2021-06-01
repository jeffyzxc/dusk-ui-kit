import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Checkbox from "@dusk-network/checkbox";

export default {
  title: `Components/Atoms/Checkbox`,
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/proto/Vx8ml25JHmOpdh665boD5x/Buttons?node-id=1%3A4&scaling=min-zoom&hide-ui=1",
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.CHECKBOX),
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
  variant: variants.ATOM.CHECKBOX.SUCCESS,
  label1: "Yo! I am a Checkbox",
  label2: "Yo! I am a Checkbox too",
};
