const glob = require("glob");
const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");
// const debug = require("debug");
// debug.enable("simple-git:*");
const git = simpleGit({
  config: ["core.hooksPath=/dev/null"], // 🔧 Disables hooks entirely
  baseDir: process.cwd(),
});
const gitHead = require("child_process").execSync("git rev-parse HEAD").toString().trim();

glob("packages/**/package.json", (_, files) => {
  console.log("Updating packages...");
  for (const filePath of files) {
    const newData = {
      gitHead,
    };
    const data = Object.assign(
      {},
      JSON.parse(fs.readFileSync(path.resolve(filePath), "utf-8")),
      newData,
    );
    fs.writeFileSync(path.resolve(filePath), JSON.stringify(data, true, 2));
  }
  git.add(files).commit("🤖 (auto-commit) preparing packages for changeset");
  console.log("Changes committed.");
});