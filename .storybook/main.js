const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");
const path = require("path");
const tailwindConfig = require("../packages/styles/dusk.tailwind.config.js");
const mode = process.env.NODE_ENV;
const production = mode !== "development";
const PACKAGES_DIR = path.resolve(__dirname, "../packages/");
// const DOCS_DIR = path.resolve(__dirname, "../docs/");
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
  stories: ["../packages/**/*.stories.js", "../docs/*.mdx"],
  addons: ["@storybook/addon-docs/register"],
  // 2. manually configure webpack, since you're not using the preset
  webpackFinal: async config => {
    const svelteLoader = config.module.rules.find(
      r => r.loader && r.loader.includes("svelte-loader"),
    );

    config.resolve = {
      ...config.resolve,
      alias: {
        svelte: path.resolve("node_modules", "svelte"),
      },
      extensions: [".mjs", ".js", ".svelte"],
      mainFields: ["svelte", "browser", "module", "main"],
    };

    svelteLoader.options = {
      ...svelteLoader.options,
      preprocess: require("svelte-preprocess")(preprocessOptions),
      dev: production,
      emitCss: true,
      hotReload: false,
    };

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

    config.module.rules.push({
      // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
      //     the docs page from the markdown
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: "babel-loader",
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
        {
          loader: "@mdx-js/loader",
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });
    // 2b. Run `source-loader` on story files to show their source code
    //     automatically in `DocsPage` or the `Source` doc block.
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      loaders: [require.resolve("@storybook/source-loader")],
      include: [PACKAGES_DIR],
      enforce: "pre",
    });

    return config;
  },
};
