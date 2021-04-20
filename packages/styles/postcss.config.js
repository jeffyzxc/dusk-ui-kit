const tailwindConfig = require("./dusk.tailwind.config");
const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const postcssInputRange = require("postcss-input-range");
const postcssNestedAncestors = require("postcss-nested-ancestors");
const postcssNested = require("postcss-nested");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
// const cssnano = require("cssnano");

// const mode = process.env.NODE_ENV;
// const dev = mode === "development";

module.exports = {
  plugins: [
    postcssImport,
    postcssUrl,
    postcssInputRange,
    postcssNestedAncestors,
    postcssNested,
    tailwindcss(tailwindConfig),
    autoprefixer,
    //FIXME cssnano seems to strip out style declarations leading to broken styles in !dev builds.
    // !dev &&
    //   cssnano({
    //     preset: "default",
    //   }),
  ],
};
