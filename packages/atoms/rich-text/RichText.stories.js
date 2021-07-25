import Default from "./storybook-views/Default.svelte";
import Html from "./storybook-views/Html.svelte";
import RichText from "@dusk-network/rich-text";

export default {
  title: `Components/Atoms/Rich Text`,
  component: RichText,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

const DefaultTemplate = (args) => ({
  Component: Default,
  props: {
    ...args,
  },
});

const HtmlTemplate = (args) => ({
  Component: Html,
  props: {
    ...args,
  },
});

export const Basic = DefaultTemplate.bind({});
Basic.args = {
  markdown: "",
};

export const HTML = HtmlTemplate.bind({});
HTML.args = {
  markdown: null,
};
