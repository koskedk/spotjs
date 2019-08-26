/* eslint-env node */
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/config.js",
  output: {
    filename: "config.js",
    library: "config",
    libraryTarget: "amd",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      { parser: { System: false } },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.(png|svg|jpg|jpeg|gif|ico)$/, loader: ["file-loader"] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, loader: ["file-loader"] }
    ]
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "src/index.html") }])
  ],
  devtool: "source-map",
  externals: [/^lodash$/, /^single-spa$/, /^rxjs\/?.*$/]
};
