// import { withKnobs, select, text } from "@storybook/addon-knobs";
// import { variants } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Organisms/Navbar",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Navbar Variant", variants.ORGANISM.NAVBAR, variants.ORGANISM.NAVBAR.BRAND),
//   },
// });

// export const WithTitle = () => ({
//   Component: DefaultView,
//   props: {
//     title: text("Navbar Title", "App Title"),
//     variant: select("Navbar Variant", variants.ORGANISM.NAVBAR, variants.ORGANISM.NAVBAR.BRAND),
//   },
// });

import { variants } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Navbar from "./Navbar.svelte";

export default {
  title: `components/organisms/Navbar`,
  component: Navbar,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ORGANISM.NAVBAR),
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
  variant: variants.ORGANISM.NAVBAR.BRAND,
};
