import { configure, addParameters, addDecorator } from "@storybook/svelte";
import { withA11y } from "@storybook/addon-a11y";
import { backgroundColors } from "./themes/dusk";
import Centered from "@storybook/addon-centered/svelte";

function getBackgrounds(colors) {
  let collection = [];
  for (const [colorName, colorValue] of Object.entries(colors)) {
    if (typeof colorValue === "object") {
      for (const [colorTone, colorToneValue] of Object.entries(colorValue)) {
        collection.push({ name: `${colorName}-${colorTone}`, value: colorToneValue });
      }
    } else if (typeof colorValue === "string") {
      collection.push({ name: colorName, value: colorValue, default: colorName === "white" });
    } else {
      throw Error("Unknown type found in backgroundColors!");
    }
  }

  return collection;
}

// addParameters({ viewport: { viewports: newViewports } }); TODO: Configure when testing guidelines are in place.
addParameters({
  backgrounds: getBackgrounds(backgroundColors),
  options: {
    showRoots: false,
  },
});

addDecorator(Centered);
addDecorator(withA11y);

configure([require.context("../packages", true, /\.stories\.js$/)], module);
