// import { withKnobs, select, text, optionsKnob as options } from "@storybook/addon-knobs";
// import { variants, sizes } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import TitleView from "./storybook-views/Title.svelte";
// import ActionsView from "./storybook-views/Actions.svelte";
// import FooterView from "./storybook-views/Footer.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Atoms/Card",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// const cardVariants = variants.ATOM.CARD;
// const cardVariantDefault = variants.ATOM.CARD.WHITE;
// const cardSizes = sizes.ATOM.CARD;
// const cardSizeDefault = sizes.ATOM.CARD.BASE;
// const buttonVariants = variants.ATOM.BUTTON;
// const buttonVariantDefault = variants.ATOM.BUTTON.BRAND;

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Card Variant", cardVariants, cardVariantDefault),
//     content: text("Card Content", "Lorem ipsum..."),
//     size: options("Size", cardSizes, cardSizeDefault, {
//       display: "radio",
//     }),
//   },
// });

// export const WithTitle = () => ({
//   Component: TitleView,
//   props: {
//     variant: select("Card Variant", cardVariants, cardVariantDefault),
//     title: text("Card Title", "I am a Card!"),
//     content: text("Card Content", "Lorem ipsum..."),
//     size: options("Size", cardSizes, cardSizeDefault, {
//       display: "radio",
//     }),
//   },
// });

// export const WithFooter = () => ({
//   Component: FooterView,
//   props: {
//     variant: select("Card Variant", cardVariants, cardVariantDefault),
//     content: text("Card Content", "Lorem ipsum..."),
//     size: options("Size", cardSizes, cardSizeDefault, {
//       display: "radio",
//     }),
//   },
// });

// export const WithTitleAndActions = () => ({
//   Component: ActionsView,
//   props: {
//     variant: select("Card Variant", cardVariants, cardVariantDefault),
//     content: text("Card Content", "Lorem ipsum..."),
//     title: text("Card Title", "I am a Card!"),
//     buttonText: text("Button Text", "Action!"),
//     buttonVariant: select("Button Variant", buttonVariants, buttonVariantDefault),
//     size: options("Size", cardSizes, cardSizeDefault, {
//       display: "radio",
//     }),
//   },
// });

import { variants, sizes, elevations } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import "@dusk-network/styles/tailwind.css";
import Card from "./Card.svelte";

export default {
  title: `components/atoms/Card`,
  component: Card,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.CARD),
      },
    },
    size: {
      control: {
        type: "radio",
        options: Object.values(sizes.ATOM.CARD),
      },
    },
    elevation: {
      control: {
        type: "select",
        options: Object.values(elevations.ATOM.CARD),
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
  variant: variants.ATOM.CARD.BRAND,
  size: sizes.ATOM.CARD.LARGE,
  elevation: elevations.ATOM.CARD.LARGE,
  cardText: "This is a card",
};
