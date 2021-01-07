import { withKnobs, select } from "@storybook/addon-knobs";
import { variants, orientations } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk-network/styles/tailwind.css";

export default {
  title: "Components/Molecules/Menu",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    orientation: select("Orientation", orientations.MENU, orientations.MENU.VERTICAL),
    variant: select("Variant", variants.MOLECULE.MENU, variants.MOLECULE.MENU.BRAND),
  },
});
