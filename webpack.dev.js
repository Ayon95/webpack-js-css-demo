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
    // the port on which the server will be listening
    port: 9000,
  },
});
