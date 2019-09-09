const merge = require("webpack-merge");
const common = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");
const APP_PATH = path.resolve(__dirname, "src");

common.devServer.proxy = {
  "/common/": {
    target: "http://68.183.47.234:4702",
    pathRewrite: { "^/common": "" }
  }
};

module.exports = merge(common, {
  mode: "production",

  entry: path.join(APP_PATH, "config.js"),
  output: {
    filename: "config.js",
    library: "config",
    libraryTarget: "amd",
    path: path.resolve(__dirname, "spot")
  },

  plugins: [
    new webpack.DefinePlugin({
      SERVICE_URL: JSON.stringify("68.183.47.234")
    })
  ]
});
