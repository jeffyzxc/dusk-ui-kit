import {
  withKnobs,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants, sizes, types } from "@dusk/ui-kit-helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "../../helpers/util.css";

export default {
  title: "Components/Atoms/List",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    type: select("Type", types.ATOM.LIST, types.ATOM.LIST.NONE)
  }
});