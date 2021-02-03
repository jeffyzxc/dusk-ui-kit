import { withKnobs, text } from "@storybook/addon-knobs";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";

export default {
  title: "Components/Organisms/CTA",
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
  props: {
    heading: text("CTA Heading", "Call to action heading..."),
    href: text("CTA Link", "#"),
    buttonText: text("CTA Button Text", "The cake is a lie"),
  },
});
