import {
  withKnobs,
  select,
  text,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import "@dusk/styles/tailwind.css";
import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/Text Field",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

const textFieldVariants = variants.ATOM.TEXT_FIELD;
const textFieldVariantDefault = variants.ATOM.TEXT_FIELD.LIGHT;

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", textFieldVariants, textFieldVariantDefault),
    placeholder: text("Placeholder", "Text input")
  }
});
