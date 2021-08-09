import Default from "./storybook-views/Default.svelte";
import Card from "./storybook-views/Card.svelte";
import Wizard from "@dusk-network/wizard/Wizard.svelte";

export default {
  title: `Components/Organisms/Wizard`,
  component: Wizard,
  argTypes: {},
};

const DefaultTemplate = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

const CardTemplate = (args) => ({
  Component: Card,
  props: {
    ...args,
  },
});

export const Basic = DefaultTemplate.bind({});
Basic.args = {};

export const InsideACard = CardTemplate.bind({});
Basic.args = {};
