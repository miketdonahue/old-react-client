const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const args = process.argv[1].split('/');
const isDevServer = args[args.length - 1] === 'webpack-dev-server';

module.exports = {
  context: __dirname,
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
  },
  plugins: [
    new CleanWebpackPlugin(['public/*.*'], { root: __dirname, dry: isDevServer }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
