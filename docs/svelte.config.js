import dusk from "@dusk-network/styles/plugin/index.js";
import metadata from "@dusk-network/meta/index.cjs";

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
        console.log("called load");
        return `export default JSON.parse(${JSON.stringify(JSON.stringify(metadata))})`;
      }
    },
  };
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: "#dusk",
    vite: () => ({
      plugins: [
        virtualMetaPlugin(),
        dusk({
          cssPath: "./node_modules/@dusk-network/styles/tailwind.css",
        }),
      ],
    }),
  },
};

export default config;
