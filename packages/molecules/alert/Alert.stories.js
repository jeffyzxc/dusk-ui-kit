// import { withKnobs, select, text, boolean, optionsKnob as options } from "@storybook/addon-knobs";
// import { variants, sizes } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Molecules/Alert",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Variant", variants.MOLECULE.ALERT, variants.MOLECULE.ALERT.WARNING),
//     title: text("Alert title", "Alert!"),
//     dismissable: boolean("Dismissable?", true),
//     size: options("Size", sizes.MOLECULE.ALERT, sizes.MOLECULE.ALERT.BASE, {
//       display: "radio",
//     }),
//   },
// });

import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Alert from "./Alert.svelte";

export default {
  title: `components/molecules/Alert`,
  component: Alert,
  argTypes: {},
};

const Template = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

export const Basic = Template.bind({});
Basic.args = {};
