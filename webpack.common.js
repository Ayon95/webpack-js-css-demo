const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // the entry point of the application
  entry: path.resolve(__dirname, "./src/index.js"),
  // the final build output
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // the dist folder will be cleaned before each build which will ensure that only the generated files are being used
    clean: true,
  },
  module: {
    rules: [
      {
        // matches all files that end with .css
        // any css files imported into a js file will be pre-processed by css loader
        // these styles will be included in the final bundle
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "My App" }),
    new BundleAnalyzerPlugin(),
  ],
};
