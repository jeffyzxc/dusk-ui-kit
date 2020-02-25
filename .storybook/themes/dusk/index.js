import { create } from "@storybook/theming/create";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import logo from "./logo.svg";

const config = resolveConfig(tailwindConfig);
const backgroundColors = config.theme.backgroundColor;
const borderColors = config.theme.borderColor;
const textColors = config.theme.textColor;
const fontFamily = config.theme.fontFamily;

export default create({
  base: "light",

  colorPrimary: backgroundColors.brand,
  colorSecondary: backgroundColors.cta,

  // UI
  appBg: backgroundColors.light,
  appContentBg: "#fff",
  appBorderColor: borderColors.info,
  appBorderRadius: 5,

  // Typography
  fontBase: fontFamily.sans.join(", "),
  fontCode: fontFamily.mono.join(", "),

  // Text colors
  textColor: textColors.dark,
  textInverseColor: textColors.light,

  // Toolbar default and active colors
  barTextColor: textColors.light,
  barSelectedColor: backgroundColors.cta,
  barBg: backgroundColors.dark,

  // Form colors
  inputBg: "#fff",
  inputBorder: borderColors.info,
  inputTextColor: textColors.dark,
  inputBorderRadius: 5,

  brandTitle: "Dusk Design System",
  brandUrl: "https://dusk.network",
  brandImage: logo
});

export { backgroundColors };
