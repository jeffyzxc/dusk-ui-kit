const postcss = require("rollup-plugin-postcss");
const path = require("path");

const postcssProcessor = () => {
  const tailwindConfig = require("./tailwind.config.js");
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("autoprefixer")(),
    require("tailwindcss")(tailwindConfig),
    require("cssnano")({
      preset: "default"
    })
  ].filter(Boolean);
};

export default {
  input: "./packages/helpers/util.css",
  output: {
    file: "./packages/themes/global.css",
    format: "cjs"
  },
  plugins: [
    postcss({
      plugins: postcssProcessor(),
      extract: path.resolve("./packages/themes/global.css")
    })
  ]
};
