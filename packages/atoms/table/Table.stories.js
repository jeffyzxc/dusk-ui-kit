import {
  withKnobs,
  boolean,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

const tableVariants = variants.ATOM.TABLE;
const tableVariantDefault = variants.ATOM.TABLE.LIGHT;

export default {
  title: "Components/Atoms/Table",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", tableVariants, tableVariantDefault),
    fixed: boolean("Fixed Layout", false),
    striped: boolean("Striped rows", true)
  }
});
