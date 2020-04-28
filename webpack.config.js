var path = require("path");
var HelloWorldPlugin = require("./src/hello-world-plugin.js");

module.exports = {
  mode: "development",
  entry: "./entry/index.js", // 在寻找相对路径的文件时会以 context 为标准进行查询
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HelloWorldPlugin({ options: true, text: "hello, world!" })],
};
