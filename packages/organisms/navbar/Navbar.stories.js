import {
  withKnobs,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "../../helpers/util.css";

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
    ),
    logoVariant: select(
      "Logo Variant",
      variants.ATOM.LOGO,
      variants.ATOM.LOGO.WHITE
    )
  }
});
