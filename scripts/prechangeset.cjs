const glob = require("glob");
const fs = require("fs");
const path = require("path");
// const simpleGit = require("simple-git");
// console.log(process.cwd());
const debug = require("debug");
debug.enable("simple-git:*");
// const git = simpleGit({
//   baseDir: process.cwd(),
// });
// const childProcess = require("child_process");
// const gitHead = childProcess.execSync("git rev-parse HEAD").toString().trim();

// const updateFiles = async () => {};

// const run = async () => {
glob("packages/**/package.json", (_, files) => {
  // console.log("updating heads to ", gitHead);
  for (const filePath of files) {
    console.log("editing", filePath);
    const newData = {
      gitHead: "pwopwoe",
    };
    const data = Object.assign(
      {},
      JSON.parse(fs.readFileSync(path.resolve(filePath), "utf-8")),
      newData,
    );
    fs.writeFileSync(path.resolve(filePath), JSON.stringify(data, true, 2));
    // childProcess.execSync(`git add ${filePath}`);
  }
  console.log("adding and committing files");
  require("simple-git")().add("./packages/*").commit("first commit!", files, { '--allow-empty' });
  // git.status();
  // git.add("packages/*");
});
//   return;
// };

// run();

// process.on("unhandledRejection", (err) => {
//   console.log(err);
//   process.exit(1);
// });

// git.add("packages/*");
