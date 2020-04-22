import {
  withKnobs,
  select,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Molecules/Dialog",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select(
      "Variant",
      variants.MOLECULE.DIALOG,
      variants.MOLECULE.DIALOG.WHITE
    ),
    title: text("Dialog title", "")
  }
});
