// import { withKnobs, select, text } from "@storybook/addon-knobs";
// import { variants } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Atoms/Logo",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Variant", variants.ATOM.LOGO, variants.ATOM.LOGO.DARK),
//     href: text("Link", "http://javascript:void(0)"),
//   },
// });

import { variants, contexts } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Logo from "./Logo.svelte";

export default {
  title: `components/atoms/Logo`,
  component: Logo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.LOGO),
      },
    },
    context: {
      control: {
        type: "radio",
        options: Object.values(contexts.ICON.LIST),
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
  variant: variants.ATOM.LOGO.BRAND,
};
