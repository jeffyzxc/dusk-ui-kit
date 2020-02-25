const path = require("path");
const tailwindConfig = require("../tailwind.config.js");
const mode = process.env.NODE_ENV;
const dev = mode === "development";

const PACKAGES_DIR = path.resolve(__dirname, "../packages/");

const preprocessOptions = {
  transformers: {
    postcss: {
      plugins: [
        require("postcss-import")(),
        require("postcss-url")(),
        require("postcss-nesting")(),
        require("tailwindcss")(tailwindConfig)
      ]
    }
  }
};
module.exports = ({ config, mode }) => {
  const svelteLoader = config.module.rules.find(
    r => r.loader && r.loader.includes("svelte-loader")
  );

  svelteLoader.options = {
    ...svelteLoader.options,
    preprocess: require("svelte-preprocess")(preprocessOptions),
    emitCss: true,
    hotReload: false
  };

  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          sourceMap: true,
          plugins: preprocessOptions.transformers.postcss.plugins
        }
      }
    ],
    include: [PACKAGES_DIR]
  });

  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve("@storybook/source-loader")],
    include: [PACKAGES_DIR],
    enforce: "pre"
  });

  return config;
};
