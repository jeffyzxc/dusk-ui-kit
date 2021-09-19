const path = require("path");
const doc = require("svelte-docster");
const glob = require("tiny-glob/sync");

const packages = path.resolve("../packages");
const output = {};
const fileSearch = glob("**/*([a-zA-Z]).svelte", { cwd: packages });
fileSearch.forEach((file) => {
  const filename = path.basename(file, ".svelte");
  const component = path.dirname(file).split(path.sep)[1];
  if (filename.startsWith("_")) return;
  if (!output[component]) output[component] = {};
  const fullFilePath = path.join(packages, file);
  output[component][filename] = Object.assign(doc({ file: fullFilePath }), {
    all: undefined,
    module: undefined,
  });
  // console.log(`Generated docs for ${component}/${filename}`);
});

module.exports = output;
