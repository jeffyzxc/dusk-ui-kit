import { configure, addParameters, addDecorator } from "@storybook/svelte";
import { withA11y } from "@storybook/addon-a11y";
import { backgroundColors as colors } from "./themes/dusk";
import Centered from "@storybook/addon-centered/svelte";

// let backgrounds = [];
// for (const [key, value, index] of Object.entries(colors)) {
//   const background = { name: key, value: value, default: key === "light" };
//   backgrounds.push(background);
// }

// addParameters({ viewport: { viewports: newViewports } });
addParameters({
  backgrounds: colors,
  options: {
    showRoots: false
  }
});

addDecorator(Centered);
addDecorator(withA11y);

configure([require.context("../packages", true, /\.stories\.js$/)], module);
