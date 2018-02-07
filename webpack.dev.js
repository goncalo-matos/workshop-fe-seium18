const path = require('path');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = webpackMerge.smart(common, {
    entry: './src/index.js',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' }
            }
        }
    },
    resolve: {
        alias: {
            'proxy.config.js': path.resolve(__dirname, 'proxy.dev.config.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            }
        ]
    }
});
