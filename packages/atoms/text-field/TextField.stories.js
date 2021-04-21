import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { variants, states, types } from "@dusk-network/helpers";
import DefaultView from "./storybook-views/Default.svelte";

import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/Text Field",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

const textFieldVariants = variants.ATOM.TEXT_FIELD;
const textFieldVariantDefault = variants.ATOM.TEXT_FIELD.LIGHT;
const textFieldStates = states.ATOM.TEXT_FIELD;
const textFieldStateDefault = states.ATOM.TEXT_FIELD.BASE;
const textFieldTypes = types.ATOM.TEXT_FIELD;
const textFieldTypeDefault = types.ATOM.TEXT_FIELD.TEXT;

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", textFieldVariants, textFieldVariantDefault),
    state: select("State", textFieldStates, textFieldStateDefault),
    placeholder: text("Placeholder", "Text input"),
    disabled: boolean("Disabled", false),
    type: select("Type", textFieldTypes, textFieldTypeDefault),
  },
});
