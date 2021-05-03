// import { withKnobs, select } from "@storybook/addon-knobs";
// import { variants } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Atoms/Checkbox",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Variant", variants.ATOM.CHECKBOX, variants.ATOM.CHECKBOX.BRAND),
//   },
// });

import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Checkbox from "./Checkbox.svelte";

export default {
  title: `components/atoms/Checkbox`,
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/proto/Vx8ml25JHmOpdh665boD5x/Buttons?node-id=1%3A4&scaling=min-zoom&hide-ui=1",
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.CHECKBOX),
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
Basic.args = {
  variant: variants.ATOM.CHECKBOX.SUCCESS,
  label1: "Yo! I am a Checkbox",
  label2: "Yo! I am a Checkbox too",
};
