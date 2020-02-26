import {
  withKnobs,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants, sizes, orientations } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "../../helpers/util.css";

export default {
  title: "Components/Molecules/Menu",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    orientation: select(
      "Orientation",
      orientations.MENU,
      orientations.MENU.VERTICAL
    )
  }
});
