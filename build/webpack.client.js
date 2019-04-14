const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
    entry: path.resolve(__dirname, '../src/client/index.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                }]
            }
        ]
    },
};

module.exports = merge(baseConfig, clientConfig);
