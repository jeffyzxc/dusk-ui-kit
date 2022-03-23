const { sveld } = require("sveld");
const glob = require("glob");
const path = require("path");
const fs = require("fs");
const PKGS_ROOT = path.resolve(path.join(__dirname, "./packages"));
const pkg = require("./package.json");

const date = new Date();
const logFilename = `types.errors-${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
  "0" + date.getDate()
).slice(-2)}.log`;
var stream = fs.createWriteStream(path.resolve(path.join(PKGS_ROOT, logFilename)), {
  flags: "a",
});

glob(
  `${PKGS_ROOT}/**/package.json`,
  {
    cwd: __dirname,
    ignore: ["node_modules", "styles"],
  },
  async (err, matches) => {
    const items = matches.filter((m) => m.indexOf("node_modules") < 0);

    for (let pkg of items) {
      try {
        stream.write("Processing: " + pkg.replace(PKGS_ROOT, "") + "\n");
        process.chdir(path.dirname(pkg));
        await sveld({
          input: "./index.js",
          glob: true,
          markdown: false,
          json: false,
          typesOptions: {
            outDir: path.resolve(path.join(PKGS_ROOT, "types")),
          },
        });
      } catch (error) {
        stream.write(`${pkg}: ${error}`);
      }
    }
    stream.end();
  },
);
