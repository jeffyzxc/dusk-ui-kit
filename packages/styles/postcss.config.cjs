const tailwindConfig = require("./dusk.tailwind.config.cjs");
const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const postcssInputRange = require("postcss-input-range");
const postcssNestedAncestors = require("postcss-nested-ancestors");
const postcssNested = require("postcss-nested");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    postcssImport,
    postcssUrl,
    postcssInputRange,
    postcssNestedAncestors,
    postcssNested,
    tailwindcss(tailwindConfig),
    autoprefixer,
  ],
};
