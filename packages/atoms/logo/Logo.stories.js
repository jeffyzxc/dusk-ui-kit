import {
  withKnobs,
  select,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants } from "@dusk/ui-kit-helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "../../helpers/util.css";

export default {
  title: "Components/Atoms/Logo",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", variants.ATOM.LOGO, variants.ATOM.LOGO.DARK),
    href: text("Link", "http://javascript:void(0)")
  }
});
