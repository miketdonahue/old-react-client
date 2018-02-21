const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const cssNext = require('postcss-cssnext');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = merge(common, {
  entry: {
    app: ['babel-polyfill', 'react-hot-loader/babel', 'webpack/hot/only-dev-server', './src/ClientEntry.jsx'],
    vendor: ['react-hot-loader/babel', 'webpack/hot/only-dev-server', './src/styles/styles.scss'],
    devServerClient: 'webpack-dev-server/client?http://localhost:8080',
  },
  output: {
    filename: '[name].js',
    pathinfo: true,
  },
  devServer: {
    publicPath: '/',
    contentBase: ['./public', './src'],
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
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
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
});
