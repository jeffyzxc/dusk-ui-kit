import { create } from "@storybook/theming/create";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../packages/styles/dusk.tailwind.config.js";
import logo from "./logo.svg";

const config = resolveConfig(tailwindConfig);
const colors = config.theme.colors;
const fontFamily = config.theme.fontFamily;

export default create({
  base: "light",
  colorPrimary: colors.purple["600"],
  colorSecondary: colors.orange["600"],

  // UI
  appBg: colors.gray["200"],
  appContentBg: "#fff",
  appBorderColor: colors.purple["700"],
  appBorderRadius: 5,

  // Typography
  fontBase: fontFamily.sans.join(", "),
  fontCode: fontFamily.mono.join(", "),

  // Text colors
  textColor: colors.gray["800"],
  textInverseColor: colors.gray["200"],

  // Toolbar default and active colors
  barTextColor: colors.gray["200"],
  barSelectedColor: colors.orange["600"],
  barBg: colors.gray["800"],

  // Form colors
  inputBg: "#fff",
  inputBorder: colors.purple["700"],
  inputTextColor: colors.gray["800"],
  inputBorderRadius: 5,

  brandTitle: "Dusk Design System",
  brandUrl: "https://dusk.network",
  brandImage: logo
});

export { colors as backgroundColors };
