const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      // static files from this directory will be served
      directory: path.join(__dirname, "public"),
    },
    // the served content will be gzip-compressed
    compress: true,
    // enable Hot Module Replacement (Hot reloading)
    hot: true,
    // the port on which the server will be listening
    port: 3000,
  },
});
