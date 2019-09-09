const merge = require("webpack-merge");
const common = require("./webpack.common-deps");
const webpack = require("webpack");
const path = require("path");
const APP_PATH = path.resolve(__dirname, "src");
const PUB_PATH = path.join(__dirname, "/../app/spot/commons");
module.exports = merge(common, {
  mode: "production",
  entry: path.join(APP_PATH, "common-deps.js"),
  output: {
    filename: "common-deps.js",
    path: PUB_PATH
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      SERVICE_URL: JSON.stringify("68.183.47.234")
    })
  ]
});
