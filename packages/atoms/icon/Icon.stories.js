// import { withKnobs, select, text } from "@storybook/addon-knobs";
// import { variants, sizes } from "@dusk-network/helpers";
// import CollectionView from "./storybook-views/Collection.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Atoms/Icon",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Collection = () => ({
//   Component: CollectionView,
//   props: {
//     variant: select("Variant", variants.ATOM.ICON, variants.ATOM.ICON.DARK),
//     size: select("Size", sizes.ATOM.ICON, sizes.ATOM.ICON.BASE),
//     tooltip: text("Tooltip", "I am a tooltip"),
//   },
// });

import { variants, sizes } from "@dusk-network/helpers";
import Collection from "./storybook-views/Collection.svelte";

import "@dusk-network/styles/tailwind.css";
import Icon from "./Icon.svelte";

export default {
  title: `components/atoms/Icon`,
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
