const merge = require('webpack-merge');
const common = require('./webpack.config');
const webpack = require("webpack");

common.devServer.proxy = {
    "/common/": {
        target: "http://localhost:4702",
        pathRewrite: {"^/common": ""}
    }
}

module.exports = merge(common, {
    mode: "development",

    plugins: [
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('localhost')
        })
    ],
});

