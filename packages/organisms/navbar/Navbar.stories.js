import { withKnobs, select, text, array } from "@storybook/addon-knobs";
import { variants } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";

export default {
  title: "Components/Organisms/Navbar",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Navbar Variant", variants.ORGANISM.NAVBAR, variants.ORGANISM.NAVBAR.BRAND),
  },
});

export const WithTitle = () => ({
  Component: DefaultView,
  props: {
    title: text("Navbar Title", "App Title"),
    variant: select("Navbar Variant", variants.ORGANISM.NAVBAR, variants.ORGANISM.NAVBAR.BRAND),
  },
});
