const postcss = require("rollup-plugin-postcss");
const path = require("path");
// const extractor = require("./src/utils/css-extractor.js");

const defaultWhitelist = ["html", "body"];

const defaultWhitelistPatterns = [
  // for JS ripple
  /ripple/,
];

const postcssProcessor = ({
  // tailwind = {},
  postcss = [],
  whitelist = defaultWhitelist,
  whitelistPatterns = defaultWhitelistPatterns,
  purge = false,
}) => {
  const tailwindConfig = require("./dusk.tailwind.config.js");
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-input-range")(),
    require("autoprefixer")(),
    require("tailwindcss")(tailwindConfig),
    require("postcss-nested-ancestors")(),
    require("postcss-nested")(),
    ...postcss,
    purge &&
      require("cssnano")({
        preset: "default",
      }),
    purge &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.svelte"],
        defaultExtractor: (content) =>
          [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
            ([_match, group, ..._rest]) => group, //eslint-disable-line
          ),
        whitelist: whitelist.filter(Boolean),
        whitelistPatterns: whitelistPatterns.filter(Boolean),
      }),
  ].filter(Boolean);
};

const plugins = (config) => postcssProcessor(config || {});

module.exports = (config = {}) =>
  postcss({
    plugins: plugins(config),
    extract: path.resolve(config.output || "./static/global.css"),
  });
