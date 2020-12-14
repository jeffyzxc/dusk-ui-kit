const path = require("path");
const tailwindConfig = require("../packages/styles/dusk.tailwind.config.js");
const PACKAGES_DIR = path.resolve(__dirname, "../packages/");
const preprocessOptions = {
  transformers: {
    postcss: {
      plugins: [
        require("postcss-import")(),
        require("postcss-url")(),
        require("tailwindcss")(tailwindConfig),
        require("postcss-nested")(),
      ],
    },
  },
};
module.exports = {
  stories: ["../packages/**/*.stories.js", "../docs/Button.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            sourceMap: true,
            plugins: preprocessOptions.transformers.postcss.plugins,
          },
        },
      ],
      include: [PACKAGES_DIR],
    });

    return config;
  },
};
