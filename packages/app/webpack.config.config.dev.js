/* eslint-env node */
const config = require("./webpack.config.config.js");
const webpack = require("webpack");

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  host: "0.0.0.0",
  contentBase: "./build",
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  proxy: {
    "/common/": {
      target: "http://localhost:4702",
      pathRewrite: { "^/common": "" }
    }
  }
};

config.mode = "development";

module.exports = config;
