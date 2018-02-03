const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSassPlugin = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
});
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: true
});
const loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
    minimize: true
});

const plugins = [extractSassPlugin, uglifyPlugin, loaderOptionsPlugin];

module.exports = webpackMerge.smart(common, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSassPlugin.extract({
                    use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins
});
