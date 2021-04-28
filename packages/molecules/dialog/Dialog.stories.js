// import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";
// // import { action } from "@storybook/addon-actions";
// import { variants } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Molecules/Dialog",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// // export const actionsData = {
// //   onDialogClose: action("onDialogClose"),
// // };

// const opacityOptions = {
//   range: true,
//   min: 0,
//   max: 1,
//   step: 0.1,
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Variant", variants.MOLECULE.DIALOG, variants.MOLECULE.DIALOG.WHITE),
//     title: text("Dialog title", ""),
//     persistent: boolean("Persistent", false),
//     opacity: number("Overlay opacity", 0.5, opacityOptions),
//   },
// });

import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Dialog from "./Dialog.svelte";

export default {
  title: `components/molecules/Dialog`,
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.MOLECULE.DIALOG),
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
  variant: variants.MOLECULE.DIALOG.BRAND,
};
