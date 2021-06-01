import Default from "./storybook-views/Default.svelte";
import Alert from "@dusk-network/alert";

export default {
  title: `Components/Molecules/Alert`,
  component: Alert,
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
