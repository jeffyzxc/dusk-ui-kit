import Default from "./storybook-views/Default.svelte";
import LoadingIndicator from "@dusk-network/loading-indicator";

export default {
  title: `Components/Atoms/LoadingIndicator`,
  component: LoadingIndicator,
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
Basic.args = {};
