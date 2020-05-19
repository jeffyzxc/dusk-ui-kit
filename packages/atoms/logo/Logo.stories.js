import { withKnobs, select, text } from "@storybook/addon-knobs";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Atoms/Logo",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", variants.ATOM.LOGO, variants.ATOM.LOGO.DARK),
    href: text("Link", "http://javascript:void(0)"),
  },
});
