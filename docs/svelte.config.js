import dusk from "@dusk-network/styles/plugin/index.js";
import metadata from "@dusk-network/meta/index.cjs";
import fs from "fs";
import path from "path";

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

const virtualExamplePlugin = () => {
  const virtualFileId = "@ui-kit-example";
  return {
    name: "ui-kit-example-plugin",
    resolveId(id) {
      if (id === virtualFileId) {
        return virtualFileId;
      }
    },
    async load(id) {
      if (id === virtualFileId) {
        let examples = {};
        const files = fs.readdirSync("../examples/src/");

        files.forEach((file) => {
          const data = fs.readFileSync(`../examples/src/${file}`, "utf8");
          examples[path.parse(file).name] = data;
        });
        return `export default JSON.parse(${JSON.stringify(JSON.stringify(examples))})`;
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
        virtualExamplePlugin(),
        virtualMetaPlugin(),
        dusk({
          cssPath: "./node_modules/@dusk-network/styles/tailwind.css",
        }),
      ],
    }),
  },
};

export default config;
