import { withKnobs, select } from "@storybook/addon-knobs";
import { variants, sizes } from "@dusk/helpers";
import CollectionView from "./storybook-views/Collection.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Atoms/Icon",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Collection = () => ({
  Component: CollectionView,
  props: {
    variant: select("Variant", variants.ATOM.ICON, variants.ATOM.ICON.DARK),
    size: select("Size", sizes.ATOM.ICON, sizes.ATOM.ICON.BASE),
  },
});
