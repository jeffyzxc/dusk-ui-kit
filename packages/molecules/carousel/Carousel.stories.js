// import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Molecules/Carousel",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     dots: boolean("Dots?", true),
//     loop: boolean("Loop?", true),
//     perPage: number("Images per slide", 1),
//     autoplay: number("Autoplay (in milliseconds)", 0),
//     duration: text("Easing", "ease-out"),
//     easing: number("Autoplay (in milliseconds)", 0),
//     startIndex: number("Autoplay (in milliseconds)", 0),
//   },
// });

import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Carousel from "./Carousel.svelte";

export default {
  title: `components/molecules/Carousel`,
  component: Carousel,
  parameters: {
    backgrounds: { default: "dark" },
  },
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
