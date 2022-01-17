const sveltePreprocess = require("svelte-preprocess");
const dusk = require("@dusk-network/styles/plugin/vite-plugin-dusk-storybook.cjs");
const metadata = require("@dusk-network/meta");
// const mdPlugin = require("vite-plugin-markdown");

// console.log(mdPlugin);

const virtualMetaPlugin = () => {
  const virtualFileId = "@ui-kit-meta";
  return {
    name: "ui-kit-meta-plugin",
    resolveId(id) {
      if (id === virtualFileId) {
        return virtualFileId;
      }
    },
    async load(id) {
      if (id === virtualFileId) {
        return `export default JSON.parse(${JSON.stringify(JSON.stringify(metadata))})`;
      }
    },
  };
};

module.exports = {
  async viteFinal(config, { configType }) {
    config.plugins.push(
      dusk({
        cssPath: "./node_modules/@dusk-network/styles/tailwind.css",
      }),
    );
    console.log("configType", configType);
    if (configType === "DEVELOPMENT") config.build = {};
    config.build.target = "es2020";
    config.plugins.push(virtualMetaPlugin());
    config.resolve.dedupe = ["@storybook/client-api"]; // 🔧 for hoisted packages

    if (process.env.NODE_ENV === "production") config.base = ""; // 🔧 for embedding storybook on GH Pages

    config.optimizeDeps = {
      exclude: ["fsevents", "purgecss", "rollup-pluginutils"],
    };

    console.log("config", config);

    return config;
  },
  core: {
    builder: "storybook-builder-vite",
  },
  stories: ["../stories/**/*.stories.svelte", "../stories/*.stories.mdx"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
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
    "@storybook/addon-svelte-csf",
    "storybook-dark-mode",
    "@storybook/addon-jest",
    "@storybook/addon-links",
  ],
  features: {
    postcss: false,
  },
  svelteOptions: {
    preprocess: [
      sveltePreprocess({
        postcss: {
          configFilePath: "./node_modules/@dusk-network/styles/postcss.config.cjs",
        },
      }),
    ],
  },
  staticDirs: ["../static"],
};
