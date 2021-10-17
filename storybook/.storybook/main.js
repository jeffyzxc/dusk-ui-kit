const sveltePreprocess = require("svelte-preprocess");
const dusk = require("@dusk-network/styles/plugin/vite-plugin-dusk-storybook.cjs");
const metadata = require("@dusk-network/meta");

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
  async viteFinal(config) {
    config.plugins.push(
      dusk({
        cssPath: "./node_modules/@dusk-network/styles/tailwind.css",
      }),
    );
    config.plugins.push(virtualMetaPlugin());
    config.resolve.dedupe = ["@storybook/client-api"]; // 🔧 for hoisted packages

    if (process.env.NODE_ENV === "production") config.base = ""; // 🔧 for embedding storybook on GH Pages

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        path: require.resolve("path-browserify"),
      },
    };

    // config.optimizeDeps = {
    //   include: ["@dusk-network/styles"],
    // };

    return config;
  },
  core: {
    builder: "storybook-builder-vite",
  },
  stories: [
    "../stories/**/*.stories.svelte",
    "../stories/*.stories.mdx",
    "../stories/atoms/drop-down/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-docs",
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
};
