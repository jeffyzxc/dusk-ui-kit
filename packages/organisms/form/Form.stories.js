import { withKnobs, select } from "@storybook/addon-knobs";
import { variants, types, states } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk-network/styles/tailwind.css";

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
    variant: select("Variant", variants.ORGANISM.FORM, variants.ORGANISM.FORM.BASE),
    state: select("State", states.ORGANISM.FORM, states.ORGANISM.FORM.BASE),
  },
});
