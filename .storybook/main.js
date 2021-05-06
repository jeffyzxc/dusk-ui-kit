const path = require("path");
const postCssConfig = require("../postcss.config");
const PACKAGES_DIR = path.resolve(__dirname, "../packages/atoms/button");
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  stories: ["../packages/**/*.stories.*", "../docs/**/*.stories.*"],
  logLevel: "debug",
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-backgrounds",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
  ],
  svelteOptions: {
    preprocess: sveltePreprocess({
      defaults: {
        style: "postcss",
      },
      postcss: true,
    }),
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      use: [require.resolve("@storybook/source-loader")],
      include: [PACKAGES_DIR],
      enforce: "pre",
    });
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              ident: "postcss",
              plugins: [...postCssConfig.plugins],
            },
          },
        },
      ],
    });

    return config;
  },
  core: {
    builder: "webpack5",
  },
};
