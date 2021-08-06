import Default from "./storybook-views/Default.svelte";
import Html from "./storybook-views/Html.svelte";
import RichText from "@dusk-network/rich-text";
import { sizes } from "@dusk-network/helpers";

export default {
  title: `Components/Atoms/Rich Text`,
  component: RichText,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: Object.values(sizes.RICH_TEXT),
      },
    },
  },
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
