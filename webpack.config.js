const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './docs/index.js'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'react-hot-loader/babel',
            ],
          },
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|scss)?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    open: true,
    static: './docs',
  },
  devtool: 'eval-source-map',
};
