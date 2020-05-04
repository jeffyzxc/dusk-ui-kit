import {
  withKnobs,
  select,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { variants, orientations } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Molecules/Menu",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    orientation: select(
      "Orientation",
      orientations.MENU,
      orientations.MENU.VERTICAL
    ),
    variant: select(
      "Variant",
      variants.MOLECULE.MENU,
      variants.MOLECULE.MENU.BRAND
    ),
    carousel: boolean(
      "Carousel?",
      false
    )
  }
});
