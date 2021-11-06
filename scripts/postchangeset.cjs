/**
 * This script is executed immediately after the changeset CLI is. It sets
 * the monorepo's package.json with the current global release version and
 * automatically commits the change.
 */

// const glob = require("tiny-glob/sync");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const simpleGit = require("simple-git");
const git = simpleGit({
  config: ["core.hooksPath=/dev/null"], // 🔧 Disables hooks entirely
  baseDir: process.cwd(), // FIXME this should probably be set to the repo root.
});

const versionFile = JSON.parse(fs.readFileSync(path.resolve("./versions.json"), "utf-8"));
execSync(`npm version ${versionFile.releases[0].newVersion}`);
git.add("./package.json").commit("🤖 (auto-commit) preparing package version for release");
