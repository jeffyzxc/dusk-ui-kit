// import { withKnobs, text } from "@storybook/addon-knobs";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Organisms/CTA",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     heading: text("CTA Heading", "Call to action heading..."),
//     href: text("CTA Link", "#"),
//     buttonText: text("CTA Button Text", "The cake is a lie"),
//   },
// });

import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Cta from "./Cta.svelte";

export default {
  title: `components/organisms/Cta`,
  component: Cta,
  parameters: {
    layout: "centered",
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
Basic.args = {
  buttonText: "This is a call to Action button",
  heading: "I'm a heading",
  href: "https://dusk.network/",
};
