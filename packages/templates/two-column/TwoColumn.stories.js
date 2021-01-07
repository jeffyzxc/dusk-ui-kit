import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { variants } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
// import "@dusk-network/styles/tailwind.css";

export default {
  title: "Components/Templates/2 Column",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variants", variants.TEMPLATE.TWO_COL, variants.TEMPLATE.TWO_COL.TWENTY_EIGHTY),
    gutters: boolean("Gutters", true),
  },
});
