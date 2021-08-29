const postcss = require("postcss");
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  stories: [
    "../docs/**/*.stories.mdx",
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|svelte)",
  ],
  addons: [
    "storybook-dark-mode",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-storyshots",
    "@storybook/addon-essentials",
    "@storybook/addon-events",
    "@storybook/addon-queryparams",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
        },
      },
    },
    "@storybook/addon-svelte-csf",
  ],
  svelteOptions: {
    preprocess: [
      sveltePreprocess({
        postcss: {
          configFilePath: "node_modules/@dusk-network/styles/postcss.config.cjs",
        },
      }),
    ],
  },
};
