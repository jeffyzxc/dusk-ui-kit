const glob = require("glob");
const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const gitHead = childProcess.execSync("git rev-parse HEAD").toString().trim();

console.log("updating heads to ", gitHead);

glob("packages/**/package.json", (_, files) => {
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
    childProcess.execSync(`git add ${filePath}`);
  }

  childProcess.execSync(`git commit -m "🤖 updating all packages"`);
});
