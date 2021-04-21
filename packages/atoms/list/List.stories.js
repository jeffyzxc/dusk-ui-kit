import { withKnobs, select } from "@storybook/addon-knobs";
import { types } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import IconView from "./storybook-views/Icon.svelte";
import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/List",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    type: select("Type", types.ATOM.LIST, types.ATOM.LIST.NONE),
  },
});

export const WithIcons = () => ({
  Component: IconView,
  props: {
    type: select("Type", types.ATOM.LIST, types.ATOM.LIST.NONE),
  },
});
