import { withKnobs, select, text, optionsKnob as options } from "@storybook/addon-knobs";
import { variants, tones, elevations, sizes } from "@dusk/helpers";
import DefaultView from "./storybook-views/Default.svelte";
import ActionsView from "./storybook-views/Actions.svelte";
import FooterView from "./storybook-views/Footer.svelte";
import readme from "./readme.stories.md";
import "@dusk/styles/tailwind.css";

export default {
  title: "Components/Atoms/Card",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

const cardVariants = variants.ATOM.CARD;
const cardVariantDefault = variants.ATOM.CARD.WHITE;
const cardTones = tones.ATOM.CARD;
const cardToneDefault = tones.ATOM.CARD.WHITE;
const cardElevations = elevations.ATOM.CARD;
const cardElevationDefault = elevations.ATOM.CARD.SMALL;
const cardSizes = sizes.ATOM.CARD;
const cardSizeDefault = sizes.ATOM.CARD.BASE;
const buttonVariants = variants.ATOM.BUTTON;
const buttonVariantDefault = variants.ATOM.BUTTON.BRAND;

export const Default = () => ({
  Component: DefaultView,
  props: {
    tone: select("Card Tone", cardTones, cardToneDefault),
    variant: select("Card Variant", cardVariants, cardVariantDefault),
    elevation: select("Card Elevation", cardElevations, cardElevationDefault),
    content: text("Card Content", "Lorem ipsum..."),
    size: options("Size", cardSizes, cardSizeDefault, {
      display: "radio",
    }),
  },
});

export const WithFooter = () => ({
  Component: FooterView,
  props: {
    tone: select("Card Tone", cardTones, cardToneDefault),
    variant: select("Card Variant", cardVariants, cardVariantDefault),
    elevation: select("Card Elevation", cardElevations, cardElevationDefault),
    content: text("Card Content", "Lorem ipsum..."),
    size: options("Size", cardSizes, cardSizeDefault, {
      display: "radio",
    }),
  },
});

export const WithTitleAndActions = () => ({
  Component: ActionsView,
  props: {
    tone: select("Card Tone", cardTones, cardToneDefault),
    variant: select("Card Variant", cardVariants, cardVariantDefault),
    elevation: select("Card Elevation", cardElevations, cardElevationDefault),
    content: text("Card Content", "Lorem ipsum..."),
    title: text("Card Title", "I am a Card!"),
    buttonText: text("Button Text", "Action!"),
    buttonVariant: select("Button Variant", buttonVariants, buttonVariantDefault),
    size: options("Size", cardSizes, cardSizeDefault, {
      display: "radio",
    }),
  },
});
