import {
  withKnobs,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "../../helpers/util.css";

export default {
  title: "Components/Templates/1 Column",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

export const Default = () => ({
  Component: DefaultView
});
