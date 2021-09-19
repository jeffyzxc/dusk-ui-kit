import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@dusk-network/styles/dusk.tailwind.config.cjs";

const config = resolveConfig(tailwindConfig);
const colours = config.theme.colors;

const dusk = create({
  base: "light",
  colorSecondary: colours.indigo["500"],
  textColor: colours.gray["900"],
  brandTitle: "Dusk UI Kit",
});

addons.setConfig({
  theme: dusk,
});
