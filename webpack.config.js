var path = require("path");

module.exports = {
  mode: "development",
  entry: "./entry/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
