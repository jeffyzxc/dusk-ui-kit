// import { withKnobs, boolean, select } from "@storybook/addon-knobs";
// import { variants, types } from "@dusk-network/helpers";
// import DefaultView from "./storybook-views/Default.svelte";
// import HeadingView from "./storybook-views/Heading.svelte";
// import readme from "./readme.stories.md";

// const tableVariants = variants.ATOM.TABLE;
// const tableVariantDefault = variants.ATOM.TABLE.LIGHT;
// const tableTypes = types.ATOM.TABLE;
// const tableTypeDefault = types.ATOM.TABLE.BASE;

// export default {
//   title: "Components/Atoms/Table",
//   parameters: {
//     notes: readme,
//   },
//   decorators: [withKnobs],
// };

// export const Default = () => ({
//   Component: DefaultView,
//   props: {
//     variant: select("Variant", tableVariants, tableVariantDefault),
//     type: select("Type", tableTypes, tableTypeDefault),
//     fixed: boolean("Fixed Layout", false),
//     striped: boolean("Striped rows", true),
//   },
// });

// export const WithHeading = () => ({
//   Component: HeadingView,
//   props: {
//     variant: select("Variant", tableVariants, tableVariantDefault),
//     type: select("Type", tableTypes, tableTypeDefault),
//     fixed: boolean("Fixed Layout", false),
//     striped: boolean("Striped rows", true),
//   },
// });

import { variants, types } from "@dusk-network/helpers";
import Default from "./storybook-views/Default.svelte";

import "@dusk-network/styles/tailwind.css";
import Table from "./Table.svelte";

export default {
  title: `components/atoms/Table`,
  component: Table,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.values(variants.ATOM.TABLE),
      },
    },
    size: {
      type: {
        type: "select",
        options: Object.values(types.ATOM.TABLE),
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
  variant: variants.ATOM.TABLE.LIGHT,
  type: types.ATOM.TABLE.BASE,
};
