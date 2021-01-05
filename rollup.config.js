const duk = require("./packages/styles/rollup-plugin-duk");

export default {
  input: "__mocks__/main.js",
  output: {
    file: "public/bundle.js",
  },
  plugins: [
    duk({
      output: "global.css",
    }),
  ],
};
