import adapter from "@sveltejs/adapter-static";
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

function getFiles(dir) {
  let results = [];

  fs.readdirSync(dir).forEach(function (file) {
    file = dir + "/" + file;

    let stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      const extension = file.split(".").pop();

      if (extension == "svelte") results.push(file);
    }
  });

  return results;
}

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
        const files = await getFiles("../examples/src");

        files.forEach((file) => {
          const data = fs.readFileSync(file, "utf8");
          const pathData = path.parse(file).dir.split("/");

          pathData.splice(0, 3);

          if (!examples[pathData[0]]) examples[pathData[0]] = {};
          if (!examples[pathData[0]][pathData[1]]) examples[pathData[0]][pathData[1]] = {};

          examples[pathData[0]][pathData[1]][path.parse(file).name] = data;
        });

        return `export default JSON.parse(${JSON.stringify(JSON.stringify(examples))})`;
      }
    },
  };
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.BASE || "",
    },
    target: "#dusk",
    vite: () => ({
      optimizeDeps: {
        include: ["highlight.js/lib/core"],
      },
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
