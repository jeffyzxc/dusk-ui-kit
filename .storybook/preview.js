import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { colors } from "./themes/dusk";

function getColors(colors) {
  let collection = [];
  for (const [colorName, colorValue] of Object.entries(colors)) {
    if (typeof colorValue === "object") {
      for (const [colorTone, colorToneValue] of Object.entries(colorValue)) {
        collection.push({ name: `${colorName}-${colorTone}`, value: colorToneValue });
      }
    } else if (typeof colorValue === "string") {
      collection.push({ name: colorName, value: colorValue });
    } else {
      throw Error("Unknown type found in backgroundColors!");
    }
  }

  return collection;
}

export const parameters = {
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true,
  },
  backgrounds: {
    default: "white",
    values: getColors(colors),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};
