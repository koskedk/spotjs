const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = merge(common, {

    entry: {
        'navbar': path.join(APP_PATH, 'navbar.ts'),
    },

    output: {
        filename: '[name].js',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'dist'),
    }
});
