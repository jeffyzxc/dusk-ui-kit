import { variants, sizes } from "@dusk-network/helpers";
import Collection from "./storybook-views/Collection.svelte";
import Icon from "@dusk-network/icon";

export default {
  title: `Components/Atoms/Icon`,
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.ICON),
      },
    },
    size: {
      control: {
        type: "radio",
        options: Object.values(sizes.ATOM.ICON),
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => ({
  Component: Collection,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  variant: variants.ATOM.ICON.BRAND,
  size: sizes.ATOM.ICON.XXXL,
};
