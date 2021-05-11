// // const postcssImport = require("postcss-import");
// import postcssImport from "postcss-import";
// // const postcssUrl = require("postcss-url");
// import postcssUrl from "postcss-url";
// // const postcssInputRange = require("postcss-input-range");
// import postcssInputRange from "postcss-input-range";
// // const postcssNestedAncestors = require("postcss-nested-ancestors");
// import postcssNestedAncestors from "postcss-nested-ancestors";
// // const postcssNested = require("postcss-nested");
// import postcssNested from "postcss-nested";
// // const tailwindcss = require("tailwindcss");
// import tailwindcss from "tailwindcss";
// // const autoprefixer = require("autoprefixer");
// import autoprefixer from "autoprefixer";
import { VitePluginDuskViewer } from "./vite-plugin-dusk-viewer.js";

import tailwindConfig from "../dusk.tailwind.config.cjs";
import postCssConfig from "../postcss.config.cjs";

export function VitePluginDusk(options = {}) {
  const config = Object.assign(
    {
      cssPath: "../tailwind.css",
      virtualFileId: "@tailwindcss",
      viewer: {
        path: "/_tailwind/",
        open: false,
      },
    },
    options,
  );
  return [
    {
      name: "vite-plugin-dusk",
      config: (_, env) => {
        // need this for jit plugin to enable watch mode
        process.env.NODE_ENV = env.mode;
        // const plugins = [
        //   postcssImport,
        //   postcssUrl,
        //   postcssInputRange,
        //   postcssNestedAncestors,
        //   postcssNested,
        //   tailwindcss(tailwindConfig),
        //   autoprefixer,
        // ];
        const plugins = postCssConfig.plugins;
        return {
          css: {
            postcss: {
              plugins,
            },
          },
        };
      },
      resolveId(id) {
        if (id === config.virtualFileId) {
          return config.cssPath;
        }
      },
    },
    VitePluginDuskViewer(
      Object.assign(Object.assign({}, config.viewer), { tailwind: tailwindConfig }),
    ),
  ];
}
