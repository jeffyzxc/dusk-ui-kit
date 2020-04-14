import {
  withKnobs,
  boolean,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants, types } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import HeadingView from "./storybook-views/Heading.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

const tableVariants = variants.ATOM.TABLE;
const tableVariantDefault = variants.ATOM.TABLE.LIGHT;
const tableTypes = types.ATOM.TABLE;
const tableTypeDefault = types.ATOM.TABLE.BASE;

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
    type: select("Type", tableTypes, tableTypeDefault),
    fixed: boolean("Fixed Layout", false),
    striped: boolean("Striped rows", true)
  }
});

export const WithHeading = () => ({
  Component: HeadingView,
  props: {
    variant: select("Variant", tableVariants, tableVariantDefault),
    type: select("Type", tableTypes, tableTypeDefault),
    fixed: boolean("Fixed Layout", false),
    striped: boolean("Striped rows", true)
  }
});
