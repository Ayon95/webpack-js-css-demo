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
    // file name for loaded asset files
    // http://localhost:9000/cheetah.jpg
    assetModuleFilename: "[name][ext]",
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

      {
        // the asset resource module will allow us to import images (their URLs) into JS files and use them
        test: /\.(png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },

      {
        // the babel loader uses Babel to transpile JavaScript files
        // node_modules folder will be excluded
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              // useBuiltIns: 'entry' replaces imports of core-js to import the required polyfills for all the target browsers
              // useBuiltIns: 'usage' will look at each JS file, and add imports of the required polyfills if the file uses any modern features
              // core-js version ^3.20.2 is being used
              // a default set of browsers will be targeted
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: "3.20",
                  targets: "defaults",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // creates an index.html file in the output directory and injects the bundle script into it (in the head of the html document)
    new HtmlWebpackPlugin({
      // the title of the index.html page
      title: "Webpack demo",
      // the html template from the specified file will be used in the generated html file
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER_MODE || "disabled",
    }),
  ],
};
