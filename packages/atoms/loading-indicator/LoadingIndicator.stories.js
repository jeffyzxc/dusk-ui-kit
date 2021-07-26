import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";
import LoadingIndicator from "@dusk-network/loading-indicator";

export default {
  title: `Components/Atoms/Loading Indicator`,
  component: LoadingIndicator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.LOADING_INDICATOR),
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
Basic.args = {};
