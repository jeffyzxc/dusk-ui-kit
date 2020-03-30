import {
  withKnobs,
  select,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Organisims/Navbar",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select(
      "Navbar Variant",
      variants.ORGANISM.NAVBAR,
      variants.ORGANISM.NAVBAR.BRAND
    )
  }
});

export const WithTitle = () => ({
  Component: DefaultView,
  props: {
    title: text("Navbar Title", "App Title"),
    variant: select(
      "Navbar Variant",
      variants.ORGANISM.NAVBAR,
      variants.ORGANISM.NAVBAR.BRAND
    )
  }
});
