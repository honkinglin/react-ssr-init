const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
    entry: path.resolve(__dirname, '../src/client/index.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../public'),
    },
};

module.exports = merge(baseConfig, clientConfig);
