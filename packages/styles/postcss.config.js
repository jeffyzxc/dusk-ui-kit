const postcssImport = require("postcss-import");
const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssUrl = require("postcss-preset-env");
const postcssNestedAncestors = require("postcss-nested-ancestors");
const postcssNested = require("postcss-nested");
const cssnano = require("cssnano");
const postcssPurgecss = require("@fullhuman/postcss-purgecss");
// const path = require("path");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const theme = "dusk";
const tailwindConfig = require("./" + theme + ".tailwind.config.js");

module.exports = {
  plugins: [
    postcssImport(),
    postcssUrl(),
    postcssNestedAncestors(),
    postcssNested(),
    tailwindcss(tailwindConfig),
    postcssPresetEnv({
      features: {
        // https://github.com/tailwindcss/tailwindcss/issues/1190
        "focus-within-pseudo-class": false,
      },
    }),
    !dev &&
      postcssPurgecss({
        content: ["./src/**/*.svelte", "./node_modules/@dusk/**/*.svelte"],
        defaultExtractor: (content) =>
          [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
            ([_match, group, ..._rest]) => group,
          ),
        fontFace: true,
        whitelist: ["html", "body"],
      }),
    !dev &&
      cssnano({
        preset: ["default", { discardComments: { removeAll: true } }],
      }),
  ].filter(Boolean),
};
