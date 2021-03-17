import DefaultView from "./storybook-views/Default.svelte";
import readme from "./readme.stories.md";
import "@dusk-network/styles/tailwind.css";

export default {
  title: "Components/Molecules/Carousel",
  parameters: {
    notes: readme,
  },
};

export const Default = () => ({
  Component: DefaultView,
});
