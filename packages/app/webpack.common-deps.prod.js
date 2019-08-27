const merge = require('webpack-merge');
const common = require('./webpack.common-deps');
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "production",

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('68.183.47.234')
        })
    ],
});
