const merge = require('webpack-merge');
const common = require('./webpack.common-deps');
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",

    plugins: [
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('127.0.0.1')
        })
    ],
});
