const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const cssNext = require('postcss-cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  entry: {
    app: ['babel-polyfill', './src/ClientEntry.jsx'],
    'app-styles': ['./src/styles/styles.scss'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    pathinfo: false,
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ // if tests fail could be because of this
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [
                  cssNext(),
                ],
              },
            },
            'sass-loader',
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
});
