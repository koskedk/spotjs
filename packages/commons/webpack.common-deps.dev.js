const merge = require("webpack-merge");
const common = require("./webpack.common-deps");
const webpack = require("webpack");
const path = require("path");
const APP_PATH = path.resolve(__dirname, "src");

module.exports = merge(common, {
  mode: "development",

  entry: path.join(APP_PATH, "common-deps.js"),

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new webpack.DefinePlugin({
      SERVICE_URL: JSON.stringify("127.0.0.1")
    })
  ]
});
