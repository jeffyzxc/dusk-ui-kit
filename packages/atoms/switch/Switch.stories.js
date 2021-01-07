import { withKnobs, select, text } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
import { variants } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import "@dusk-network/styles/tailwind.css";
import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/Switch",
  parameters: {
    notes: readme,
    layout: "centered",
  },
  decorators: [withKnobs],
};

const switchVariants = variants.ATOM.SWITCH;
const switchVariantDefault = variants.ATOM.SWITCH.BRAND;

export const Default = () => ({
  Component: DefaultView,
  props: {
    label: text("Label", ""),
    variant: select("Variant", switchVariants, switchVariantDefault),
  },
});
