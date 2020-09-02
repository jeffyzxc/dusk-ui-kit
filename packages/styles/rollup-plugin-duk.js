const postcss = require("rollup-plugin-postcss");
// const sveltePreprocess = require("svelte-preprocess");
const svelte = require("rollup-plugin-svelte");
// const extractor = require("./css-extractor");
const path = require("path");

const postcssProcessor = (config = {}) => {
  const theme = config.theme || "dusk";
  const tailwindConfig = require("./" + theme + ".tailwind.config.js");
  const plugins = [
    require("postcss-import")(),
    require("postcss-url")(),
    require("tailwindcss")(tailwindConfig),
    require("postcss-nested-ancestors")(),
    require("postcss-nested")(),
    require("cssnano")({
      preset: "default",
    }),
    config.purgecss &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./src/**/*.svelte"],
        defaultExtractor: content =>
          [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => {
            console.log(_match);
            console.log(_rest);
            return group;
          }),
        fontFace: true,
        whitelist: ["html", "body"],
      }),
  ].filter(Boolean);
  return plugins;
};

module.exports = (config = {}) =>
  svelte({
    dev: config.dev,
    hydratable: true,
    emitCss: true,
    preprocess: postcss({
      plugins: postcssProcessor(config),
      extract: path.resolve(config.output || "./static/global.css"),
    }),
  });
