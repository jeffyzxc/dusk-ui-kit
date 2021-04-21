// import { withKnobs, select, text, boolean, optionsKnob as options } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
// import { variants, sizes, icons } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import GroupView from "./storybook-views/Group.svelte";
// import IconView from "./storybook-views/Icon.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Atoms/Button",
//   parameters: {
//     notes: readme,
//     layout: "centered",
//     design: {
//       type: "figma",
//       url:
//         "https://www.figma.com/proto/Vx8ml25JHmOpdh665boD5x/Buttons?node-id=1%3A4&scaling=min-zoom&hide-ui=1",
//     },
//   },
//   decorators: [withKnobs],
// };

// const buttonVariants = variants.ATOM.BUTTON;
// const buttonVariantDefault = variants.ATOM.BUTTON.BRAND;
// const buttonSizes = sizes.ATOM.BUTTON;
// const buttonSizeDefault = sizes.ATOM.BUTTON.BASE;
// const buttonIcons = icons;
// const buttonIconDefault = icons.DUSK_TICKER;

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Variant", buttonVariants, buttonVariantDefault),
//     size: options("Size", buttonSizes, buttonSizeDefault, {
//       display: "radio",
//     }),
//     disabled: boolean("Disabled", false),
//     outline: boolean("Outline", false),
//     buttonText: text("Button Value", "Basic"),
//   },
//   on: {
//     click: (event) => {
//       action(event);
//     },
//   },
// });

// export const Group = () => ({
//   Component: GroupView,
//   props: {
//     button1_variant: select("Button 1 Variant", buttonVariants, buttonVariantDefault),
//     button1_size: options("Button 1 Size", buttonSizes, buttonSizeDefault, {
//       display: "radio",
//     }),
//     button1_disabled: boolean("Button 1 Disabled", false),
//     button1_outline: boolean("Button 1 Outline", false),
//     button1_buttonText: text("Button 1 Value", "Group Button 1"),
//     button2_variant: select("Button 2 Variant", buttonVariants, buttonVariantDefault),
//     button2_size: options("Button 2 Size", buttonSizes, buttonSizeDefault, {
//       display: "radio",
//     }),
//     button2_disabled: boolean("Button 2 Disabled", false),
//     button2_outline: boolean("Button 2 Outline", false),
//     button2_buttonText: text("Button 2 Value", "Group Button 2"),
//     button3_variant: select("Button 3 Variant", buttonVariants, buttonVariantDefault),
//     button3_size: options("Button 3 Size", buttonSizes, buttonSizeDefault, {
//       display: "radio",
//     }),
//     button3_disabled: boolean("Button 3 Disabled", false),
//     button3_outline: boolean("Button 3 Outline", false),
//     button3_buttonText: text("Button 3 Value", "Group Button 3"),
//   },
//   on: {
//     click: (event) => {
//       action(event);
//     },
//   },
// });

// export const withIcons = () => ({
//   Component: IconView,
//   props: {
//     variant: select("Variant", buttonVariants, buttonVariantDefault),
//     size: options("Size", buttonSizes, buttonSizeDefault, {
//       display: "radio",
//     }),
//     disabled: boolean("Disabled", false),
//     outline: boolean("Outline", false),
//     buttonText: text("Button Value", "Basic"),
//     iconName: select("Icon", buttonIcons, buttonIconDefault),
//   },
//   on: {
//     click: (event) => {
//       action(event);
//     },
//   },
// });

// import ButtonView from "./storybook-views/Default.svelte";
// import Button from "./Button.svelte";

// export default {
//   title: "Components/Atoms/Button",
//   component: Button,
// };

// const Template = (args) => ({
//   Component: ButtonView,
//   props: {
//     ...args,
//   },
// });

// export const Rounded = Template.bind({});
// Rounded.args = {
//   rounded: true,
//   text: "Rounded",
// };

// export const Square = Template.bind({});
// Square.args = {
//   rounded: false,
//   text: "Square",
// };

import { variants, sizes, contexts } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Button from "./Button.svelte";

export default {
  title: `components/atoms/Button`,
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/proto/Vx8ml25JHmOpdh665boD5x/Buttons?node-id=1%3A4&scaling=min-zoom&hide-ui=1",
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.BUTTON),
      },
    },
    size: {
      control: {
        type: "radio",
        options: Object.values(sizes.ATOM.BUTTON),
      },
    },
    context: {
      control: {
        type: "radio",
        options: Object.values(contexts.BUTTON.ACTION),
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

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  variant: variants.ATOM.BUTTON.BRAND,
  size: sizes.ATOM.BUTTON.LARGE,
  buttonText: "Hi I'm a Button",
  outline: false,
  context: null,
};
