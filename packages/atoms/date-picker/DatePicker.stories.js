import { withKnobs, select } from "@storybook/addon-knobs";
import { variants, tones } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Atoms/DatePicker",
  parameters: {
    notes: readme,
    layout: "centered",
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    tone: select("Tone", tones.ATOM.DATE_PICKER, tones.ATOM.DATE_PICKER.APP),
    variant: select("Variant", variants.ATOM.DATE_PICKER, variants.ATOM.DATE_PICKER.LIGHT),
  },
});
