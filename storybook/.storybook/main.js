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

    config.resolve.dedupe = ["@storybook/client-api"]; // 🔧 Fix for

    return config;
  },
  core: {
    builder: "storybook-builder-vite",
  },
  stories: ["../stories/**/*.stories.svelte"],
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
    "@storybook/addon-svelte-csf",
    "storybook-dark-mode",
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
