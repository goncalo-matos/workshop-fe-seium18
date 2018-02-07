const path = require('path');
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
const commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor_[chunkhash].js',
    minChunks: Infinity
});
const moduleConcatenationPlugin = new webpack.optimize.ModuleConcatenationPlugin();

const plugins = [extractSassPlugin, uglifyPlugin, loaderOptionsPlugin, commonChunksPlugin, moduleConcatenationPlugin];

module.exports = webpackMerge.smart(common, {
    entry: {
        vendor: ['angular', 'angular-route'],
        bundle: ['./src/index.js']
    },
    resolve: {
        alias: {
            'proxy.config.js': path.resolve(__dirname, 'proxy.prod.config.js')
        }
    },
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
