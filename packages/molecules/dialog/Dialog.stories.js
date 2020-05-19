import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Molecules/Dialog",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const actionsData = {
  onDialogClose: action("onDialogClose"),
};

const opacityOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.1,
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", variants.MOLECULE.DIALOG, variants.MOLECULE.DIALOG.WHITE),
    title: text("Dialog title", ""),
    persistent: boolean("Persistent", false),
    opacity: number("Overlay opacity", 0.5, opacityOptions),
  },
  on: {
    ...actionsData,
  },
});
