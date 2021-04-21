import { withKnobs, select, text } from "@storybook/addon-knobs";
import { variants, states, types } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";

export default {
  title: "Components/Molecules/Control",
  parameters: {
    notes: readme,
    layout: "centered",
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    type: select("Type", types.MOLECULE.CONTROL, types.MOLECULE.CONTROL.APP),
    variant: select("Variant", variants.MOLECULE.CONTROL, variants.MOLECULE.CONTROL.LIGHT),
    state: select("State", states.MOLECULE.CONTROL, states.MOLECULE.CONTROL.BASE),
    label: text("Label (optional)", "Field label"),
    placeholder: text("Placeholder (optional)", "Enter your stuff..."),
    message: text("Message (optional)", "Something useful regarding the input"),
  },
});
