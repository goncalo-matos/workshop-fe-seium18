const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = webpackMerge.smart(common, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'scss-loader', options: { sourceMap: true } }
                ]
            }
        ]
    }
});
