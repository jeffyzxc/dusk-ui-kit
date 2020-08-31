import { withKnobs, select } from "@storybook/addon-knobs";
import { tones, variants, types, states } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Organisms/Form",
  parameters: {
    notes: readme,
    layout: "centered",
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    type: select("Type", types.ORGANISM.FORM, types.ORGANISM.FORM.STACKED),
    tone: select("Tone", tones.ORGANISM.FORM, tones.ORGANISM.FORM.APP),
    variant: select("Variant", variants.ORGANISM.FORM, variants.ORGANISM.FORM.BASE),
    state: select("State", states.ORGANISM.FORM, states.ORGANISM.FORM.BASE),
  },
});
