import { withKnobs, select } from "@storybook/addon-knobs";
import { variants } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk-network/styles/tailwind.css";

export default {
  title: "Components/Atoms/Checkbox",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", variants.ATOM.CHECKBOX, variants.ATOM.CHECKBOX.BRAND),
  },
});
