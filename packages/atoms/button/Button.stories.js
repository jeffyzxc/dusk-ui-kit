import { variants, sizes, icons } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import Button from "@dusk-network/button";

export default {
  title: `Components/Atoms/Button`,
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.BUTTON),
      },
    },
    size: {
      control: {
        type: "radio",
        options: Object.values(sizes.ATOM.BUTTON),
      },
    },
    circle: {
      control: {
        type: "boolean",
        options: [true, false],
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    buttonText: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => ({
  Component: DefaultView,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  variant: variants.ATOM.BUTTON.BRAND,
  size: sizes.ATOM.BUTTON.LARGE,
  buttonText: "Hi I'm a Button",
  outline: false,
  context: null,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: variants.ATOM.BUTTON.BRAND,
  size: sizes.ATOM.BUTTON.LARGE,
  buttonText: null,
  outline: false,
  context: null,
  icon: icons.PLUS_CIRCLE_OUTLINE,
};

export const WithIconAndText = Template.bind({});
WithIconAndText.args = {
  variant: variants.ATOM.BUTTON.BRAND,
  size: sizes.ATOM.BUTTON.LARGE,
  buttonText: "Hi I'm a Button with an icon",
  outline: false,
  context: null,
  icon: icons.PLUS_CIRCLE_OUTLINE,
};
