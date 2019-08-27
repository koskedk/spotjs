const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");

module.exports = {

    entry: './src/common-deps.js',
    output: {
        filename: 'common-deps.js',
        path: path.resolve(__dirname, 'build/common-deps'),
        chunkFilename: '[name].js',
    },
    node: {
        fs: 'empty',
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    devtool: 'sourcemap',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'src/common-deps.js')}
        ]),
    ],
    module: {
        rules: [
            {parser: {System: false}},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: "0.0.0.0",
        compress: true,
        port: 4702,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization"
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'src/common-deps.js')}
        ])
    ]
};
