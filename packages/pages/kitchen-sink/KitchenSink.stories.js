import { withKnobs } from "@storybook/addon-knobs";
import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk-network/styles/tailwind.css";

export default {
  title: "Components/Pages/Kitchen Sink",
  parameters: {
    notes: readme,
    layout: "fullscreen",
  },
  decorators: [withKnobs],
};

export const Default = () => ({
  Component: DefaultView,
});
