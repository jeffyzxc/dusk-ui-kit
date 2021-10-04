const path = require("path");
const doc = require("svelte-docster");
const glob = require("tiny-glob/sync");
const packages = path.resolve("../packages");
const output = {};
const fileSearch = glob("**/*([a-zA-Z]).svelte", { cwd: packages });

fileSearch.forEach((file) => {
  const filename = path.basename(file, ".svelte");
  const component = path.dirname(file).split(path.sep)[1];
  const group = path.dirname(file).split(path.sep)[0];

  if (filename.startsWith("_")) return;
  if (!output[group]) output[group] = {};
  if (!output[group][component]) output[group][component] = {};

  const fullFilePath = path.join(packages, file);

  output[group][component][filename] = Object.assign(doc({ file: fullFilePath }), {
    all: undefined,
    module: undefined,
  });

  console.log(`Generated docs for ${group}/${component}/${filename}`);
});

module.exports = output;
