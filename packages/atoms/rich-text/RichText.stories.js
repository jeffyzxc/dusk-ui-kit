// import { withKnobs, text } from "@storybook/addon-knobs";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Atoms/Rich Text (Markdown)",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     content: text("Markdown", "I am some _rich_ `text`."),
//   },
// });

import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import RichText from "./RichText.svelte";

export default {
  title: `components/atoms/RichText`,
  component: RichText,
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
  content: "",
};
