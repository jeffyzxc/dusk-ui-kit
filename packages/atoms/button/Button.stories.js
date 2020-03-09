import {
  withKnobs,
  select,
  text,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants, sizes, icons } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import GroupView from "./storybook-views/Group.svelte";
import IconView from "./storybook-views/Icon.svelte";
import "@dusk/styles/tailwind.css";
import readme from "./readme.stories.md";

export default {
  title: "Components/Atoms/Button",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

const buttonVariants = variants.ATOM.BUTTON;
const buttonVariantDefault = variants.ATOM.BUTTON.BRAND;
const buttonSizes = sizes.ATOM.BUTTON;
const buttonSizeDefault = sizes.ATOM.BUTTON.BASE;
const buttonIcons = icons;
const buttonIconDefault = icons.DUSK_TICKER;

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Variant", buttonVariants, buttonVariantDefault),
    size: options("Size", buttonSizes, buttonSizeDefault, {
      display: "radio"
    }),
    disabled: boolean("Disabled", false),
    outline: boolean("Outline", false),
    buttonText: text("Button Value", "Basic")
  },
  on: {
    click: event => {
      action(event);
    }
  }
});

export const Group = () => ({
  Component: GroupView,
  props: {
    button1_variant: select(
      "Button 1 Variant",
      buttonVariants,
      buttonVariantDefault
    ),
    button1_size: options("Button 1 Size", buttonSizes, buttonSizeDefault, {
      display: "radio"
    }),
    button1_disabled: boolean("Button 1 Disabled", false),
    button1_outline: boolean("Button 1 Outline", false),
    button1_buttonText: text("Button 1 Value", "Group Button 1"),
    button2_variant: select(
      "Button 2 Variant",
      buttonVariants,
      buttonVariantDefault
    ),
    button2_size: options("Button 2 Size", buttonSizes, buttonSizeDefault, {
      display: "radio"
    }),
    button2_disabled: boolean("Button 2 Disabled", false),
    button2_outline: boolean("Button 2 Outline", false),
    button2_buttonText: text("Button 2 Value", "Group Button 2"),
    button3_variant: select(
      "Button 3 Variant",
      buttonVariants,
      buttonVariantDefault
    ),
    button3_size: options("Button 3 Size", buttonSizes, buttonSizeDefault, {
      display: "radio"
    }),
    button3_disabled: boolean("Button 3 Disabled", false),
    button3_outline: boolean("Button 3 Outline", false),
    button3_buttonText: text("Button 3 Value", "Group Button 3")
  },
  on: {
    click: event => {
      action(event);
    }
  }
});

export const withIcons = () => ({
  Component: IconView,
  props: {
    variant: select("Variant", buttonVariants, buttonVariantDefault),
    size: options("Size", buttonSizes, buttonSizeDefault, {
      display: "radio"
    }),
    disabled: boolean("Disabled", false),
    outline: boolean("Outline", false),
    buttonText: text("Button Value", "Basic"),
    iconName: select("Icon", buttonIcons, buttonIconDefault)
  },
  on: {
    click: event => {
      action(event);
    }
  }
});
