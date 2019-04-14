const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/client/index.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]]
                }
            },
        ]
    }
}
