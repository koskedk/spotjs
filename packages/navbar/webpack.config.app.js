const base = require('./webpack.config.base');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        'main': path.join(APP_PATH, 'index.tsx'),
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    ...base
};
