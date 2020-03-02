import {
  withKnobs,
  select,
  text,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { variants, elevations } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import TitleView from "./storybook-views/Title.svelte";
import ActionsView from "./storybook-views/Actions.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Atoms/Card",
  parameters: {
    notes: readme
  },
  decorators: [withKnobs]
};

const cardVariants = variants.ATOM.CARD;
const cardVariantDefault = variants.ATOM.CARD.WHITE;
const cardElevations = elevations.ATOM.CARD;
const cardElevationDefault = elevations.ATOM.CARD.SMALL;
const buttonVariants = variants.ATOM.BUTTON;
const buttonVariantDefault = variants.ATOM.BUTTON.BRAND;

export const Default = () => ({
  Component: DefaultView,
  props: {
    variant: select("Card Variant", cardVariants, cardVariantDefault),
    elevation: select("Card Elevation", cardElevations, cardElevationDefault),
    content: text("Card Content", "Lorem ipsum...")
  }
});

export const WithTitle = () => ({
  Component: TitleView,
  props: {
    variant: select("Card Variant", cardVariants, cardVariantDefault),
    elevation: select("Card Elevation", cardElevations, cardElevationDefault),
    content: text("Card Content", "Lorem ipsum..."),
    title: text("Card Title", "I am a Card!")
  }
});

export const WithTitleAndActions = () => ({
  Component: ActionsView,
  props: {
    variant: select("Card Variant", cardVariants, cardVariantDefault),
    elevation: select("Card Elevation", cardElevations, cardElevationDefault),
    content: text("Card Content", "Lorem ipsum..."),
    title: text("Card Title", "I am a Card!"),
    buttonText: text("Button Text", "Action!"),
    buttonVariant: select(
      "Button Variant",
      buttonVariants,
      buttonVariantDefault
    )
  }
});
