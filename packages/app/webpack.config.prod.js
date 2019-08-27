const merge = require('webpack-merge');
const common = require('./webpack.config');
const webpack = require("webpack");


common.devServer.proxy = {
    "/common/": {
        target: "http://68.183.47.234:4702",
        pathRewrite: {"^/common": ""}
    }
}

module.exports = merge(common, {
    mode: "production",

    plugins: [
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('68.183.47.234')
        })
    ],
});

