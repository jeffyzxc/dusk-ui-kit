// import { withKnobs, select } from "@storybook/addon-knobs";
// import { types } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import IconView from "./storybook-views/Icon.svelte";
// import readme from "./readme.stories.md";

// export default {
//   title: "Components/Atoms/List",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     type: select("Type", types.ATOM.LIST, types.ATOM.LIST.NONE),
//   },
// });

// export const WithIcons = () => ({
//   Component: IconView,
//   props: {
//     type: select("Type", types.ATOM.LIST, types.ATOM.LIST.NONE),
//   },
// });

import { types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import List from "./List.svelte";

export default {
  title: `components/atoms/List`,
  component: List,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: Object.values(types.ATOM.LIST),
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
  type: types.ATOM.LIST.BULLETED,
};
