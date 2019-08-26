/* eslint-env node */
const config = require("./webpack.common-deps.config.js");
const webpack = require("webpack");

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  host: "0.0.0.0",
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization"
  }
};

config.mode = "development";

module.exports = config;
