import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import "@dusk/styles/tailwind.css";
import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/Switch",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

const switchVariants = variants.ATOM.SWITCH;
const switchVariantDefault = variants.ATOM.SWITCH.BRAND;

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", switchVariants, switchVariantDefault),
  },
  on: {
    click: event => {
      action(event);
    },
  },
});
