const postcss = require("postcss");
const sveltePreprocess = require("svelte-preprocess");
const VirtualModulesPlugin = require("webpack-virtual-modules");
const metadata = require("@dusk-network/meta");

module.exports = {
  webpackFinal: async (config) => {
    config.plugins.push(
      new VirtualModulesPlugin({
        "node_modules/ui-kit-meta.js": `export default JSON.parse(${JSON.stringify(
          JSON.stringify(metadata),
        )})`,
      }),
    );
    return config;
  },
  stories: ["../stories/**/*.stories.svelte", "../stories/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.svelte?$/],
          include: [],
        },
      },
    },
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
        },
      },
    },
    "@storybook/addon-svelte-csf",
    "storybook-dark-mode",
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
