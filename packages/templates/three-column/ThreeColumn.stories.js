import {
  withKnobs,
  select,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Templates/3 Column",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select(
      "Variants",
      variants.TEMPLATE.THREE_COL,
      variants.TEMPLATE.THREE_COL.THIRTY_THIRTY_THIRTY
    ),
    gutters: boolean("Gutters", true)
  }
});
