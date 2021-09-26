const glob = require("tiny-glob/sync");
const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");
// const debug = require("debug");
// debug.enable("simple-git:*");
const git = simpleGit({
  config: ["core.hooksPath=/dev/null"], // 🔧 Disables hooks entirely
  baseDir: process.cwd(), // FIXME this should probably be set
});
const gitHead = require("child_process").execSync("git rev-parse HEAD").toString().trim();
const fileSearch = glob("packages/**/package.json");
fileSearch.forEach((file) => {
  const newData = {
    gitHead,
  };
  const data = Object.assign({}, JSON.parse(fs.readFileSync(path.resolve(file), "utf-8")), newData);
  fs.writeFileSync(path.resolve(file), JSON.stringify(data, true, 2));
});

if (fileSearch) {
  git.add(fileSearch).commit("🤖 (auto-commit) preparing packages for changeset");
  console.log("Changes committed.");
}
