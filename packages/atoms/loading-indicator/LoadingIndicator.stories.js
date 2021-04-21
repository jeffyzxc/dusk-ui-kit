import { withKnobs, select } from "@storybook/addon-knobs";
import { variants } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/Loading Indicator",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select(
      "Variant",
      variants.ATOM.LOADING_INDICATOR,
      variants.ATOM.LOADING_INDICATOR.BRAND,
    ),
  },
});
