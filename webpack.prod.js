const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  // with production mode, webpack will produce an optimized build
  // this will set process.env.NODE_ENV to 'production'
  mode: "production",
  // this is the recommended choice of devtool for production builds
  // having source maps enabled in production is good because they are useful for debugging as well as running benchmark tests
  devtool: "source-map",
});
