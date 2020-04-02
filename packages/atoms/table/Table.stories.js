import {
  withKnobs,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// import { variants, sizes, types } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

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
    fixed: boolean("Fixed Layout", false)
  }
});
