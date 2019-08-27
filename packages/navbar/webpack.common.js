const path = require('path');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/},
      {
        test: /\.(scss|sass|css)$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {test: /\.(png|svg|jpg|jpeg|gif|ico)$/, loader: ["file-loader"]},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, loader: ["file-loader"]}
    ]
  },
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: "0.0.0.0",
    compress: true,
    historyApiFallback: true,
    port: 4703,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization"
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ]
};
