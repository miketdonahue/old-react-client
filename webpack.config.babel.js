import path from 'path';
import webpack from 'webpack';

const env = process.env.NODE_ENV;
const isProd = (env === 'production');

let config = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client.jsx',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // Sends names of modules for debugging
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader/url', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

if (isProd) {
  config = Object.assign({}, config, {
    entry: ['./src/client.jsx'],
    devtool: false,
    plugins: [],
  });
}

module.exports = config;
