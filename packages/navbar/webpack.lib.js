const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const APP_PATH = path.resolve(__dirname, "src");
const PUB_PATH = path.join(__dirname, "/../app/spot/topbar");

module.exports = merge(common, {
  entry: {
    navbar: path.join(APP_PATH, "navbar.ts")
  },

  output: {
    filename: "[name].js",
    libraryTarget: "amd",
    path: PUB_PATH
  },
  externals: [
    /^lodash$/,
    /^single-spa$/,
    /^react$/,
    /^react\/lib.*/,
    /^react-dom$/,
    /.*react-dom.*/,
    /^rxjs\/?.*$/,
    /^prime$/
  ]
});
