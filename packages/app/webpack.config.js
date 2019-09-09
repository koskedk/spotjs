const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const APP_PATH = path.resolve(__dirname, "src");

module.exports = {
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

  devServer: {
    contentBase: path.join(__dirname, "spot"),
    host: "0.0.0.0",
    compress: true,
    port: 4701,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    proxy: {}
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/index.html")
      },
      {
        from: path.resolve(__dirname, "src/favicon.ico")
      }
    ])
  ],
  devtool: "source-map",
  externals: [/^lodash$/, /^single-spa$/, /^rxjs\/?.*$/]
};
