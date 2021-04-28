// import { withKnobs, select } from "@storybook/addon-knobs";
// import { variants, types, states } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Organisms/Form",
//   parameters: {
//     notes: readme,
//     layout: "centered",
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     type: select("Type", types.ORGANISM.FORM, types.ORGANISM.FORM.STACKED),
//     variant: select("Variant", variants.ORGANISM.FORM, variants.ORGANISM.FORM.BASE),
//     state: select("State", states.ORGANISM.FORM, states.ORGANISM.FORM.BASE),
//   },
// });

import { variants, states, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Form from "./Form.svelte";

export default {
  title: `components/organisms/Form`,
  component: Form,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ORGANISM.FORM),
      },
    },
    state: {
      control: {
        type: "select",
        options: Object.values(states.ORGANISM.FORM),
      },
    },
    type: {
      control: {
        type: "select",
        options: Object.values(types.ORGANISM.FORM),
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
  variant: variants.ORGANISM.FORM.DARK,
  state: states.ORGANISM.FORM.DANGER,
  type: types.ORGANISM.FORM.STACKED,
};
