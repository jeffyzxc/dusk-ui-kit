import { variants, sizes } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import Card from "@dusk-network/card";

export default {
  title: `Components/Atoms/Card`,
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.CARD),
      },
    },
    size: {
      control: {
        type: "radio",
        options: Object.values(sizes.ATOM.CARD),
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
  variant: variants.ATOM.CARD.DEFAULT,
  size: sizes.ATOM.CARD.BASE,
  cardText:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam minus quod neque eligendi eaque aliquam fugit nemo cupiditate odio sapiente?",
};

export const Title = Template.bind({});
Title.args = {
  ...Basic.args,
  title: "This is a title!",
};

export const Footer = Template.bind({});
Footer.args = {
  ...Basic.args,
  footer: "This is some footer text.",
};

export const Action = Template.bind({});
Action.args = {
  ...Basic.args,
  title: "This is a title!",
  action: "ACTION",
  buttonText: "Card Button!",
  buttonSize: sizes.ATOM.BUTTON.LARGE,
  buttonVariant: variants.ATOM.BUTTON.SUCCESS,
};
