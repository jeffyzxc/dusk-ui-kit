// import { withKnobs, select, text } from "@storybook/addon-knobs";
// import { variants, states, types } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Molecules/Control",
//   parameters: {
//     notes: readme,
//     layout: "centered",
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     type: select("Type", types.MOLECULE.CONTROL, types.MOLECULE.CONTROL.APP),
//     variant: select("Variant", variants.MOLECULE.CONTROL, variants.MOLECULE.CONTROL.LIGHT),
//     state: select("State", states.MOLECULE.CONTROL, states.MOLECULE.CONTROL.BASE),
//     label: text("Label (optional)", "Field label"),
//     placeholder: text("Placeholder (optional)", "Enter your stuff..."),
//     message: text("Message (optional)", "Something useful regarding the input"),
//   },
// });

import { variants, states, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Control from "./Control.svelte";

export default {
  title: `components/molecules/Control`,
  component: Control,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.MOLECULE.CONTROL),
      },
    },
    state: {
      control: {
        type: "select",
        options: Object.values(states.MOLECULE.CONTROL),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.MOLECULE.CONTROL),
      },
    },
  },
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {
  variant: variants.MOLECULE.CONTROL.LIGHT,
  state: states.MOLECULE.CONTROL.SUCCESS,
  type: types.MOLECULE.CONTROL.STACKED,
  placeholder: "I'm Control",
};
