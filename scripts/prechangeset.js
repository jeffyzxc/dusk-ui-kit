/**
 * This script is executed immediately before the changeset CLI is. It
 * reads the `HEAD` commit hash and adds it to every package's `package.json`before
 * committing the changes. This ensures that the changeset version will apply to
 * every package in the UI Kit, thus maintaining the approach that every package is
 * versioned identically.
 */

const glob = require("tiny-glob/sync");
const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");
const git = simpleGit({
  config: ["core.hooksPath=/dev/null"], // 🔧 Disables hooks entirely
  baseDir: process.cwd(), // FIXME this should probably be set to the repo root.
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
}
