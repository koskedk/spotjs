const base = require('./webpack.config.base');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        'navbar': path.join(APP_PATH, 'navbar.ts'),
    },

    output: {
        filename: '[name].js',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'dist'),
    },
    ...base
};
