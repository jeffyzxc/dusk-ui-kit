import { withKnobs, select } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
import { variants, tones } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import "@dusk/styles/tailwind.css";
import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/Date Picker",
  parameters: {
    notes: readme,
    layout: "centered",
  },
  decorators: [withKnobs],
};

const datepickerVariants = variants.ATOM.DATEPICKER;
const datepickerVariantDefault = variants.ATOM.DATEPICKER.BRAND;
const datepickerTones = tones.ATOM.DATEPICKER;
const datepickerToneDefault = tones.ATOM.DATEPICKER.APP;

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", datepickerVariants, datepickerVariantDefault),
    tone: select("Tone", datepickerTones, datepickerToneDefault),
  },
});
