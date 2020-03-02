const postcss = require("rollup-plugin-postcss");
const path = require("path");

const postcssProcessor = (config = {}) => {
  const theme = config.theme || "dusk";
  const tailwindConfig = require("./" + theme + ".tailwind.config.js");
  const plugins = [
    require("postcss-import")(),
    require("postcss-url")(),
    require("autoprefixer")(),
    require("postcss-nested")(),
    require("tailwindcss")(tailwindConfig),
    require("cssnano")({
      preset: "default"
    })
  ].filter(Boolean);
  return plugins;
};

module.exports = (config = {}) =>
  postcss({
    plugins: postcssProcessor(config),
    extract: path.resolve(config.output || "./static/global.css")
  });
