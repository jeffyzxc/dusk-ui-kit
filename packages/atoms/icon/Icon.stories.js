import { variants, sizes } from "@dusk-network/helpers";
import CollectionTemplate from "./storybook-views/Collection.svelte";
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
        options: Object.values(variants.ICON),
      },
    },
    size: {
      control: {
        type: "radio",
        options: Object.values(sizes.ICON),
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
  Component: CollectionTemplate,
  props: {
    ...args,
  },
});

export const Collection = Template.bind({});
Collection.args = {
  variant: variants.ICON.BRAND,
  size: sizes.ICON.XXXL,
};
