
'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./example/app.jsx'],
    common: ['react', 'react-dom', 'react-router', 'fastclick'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.s?css$/,
      loader: 'style-loader!css-loader!sass-loader',
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
      exclude: /node_modules/,
    }, {
      test: /\.(ico|png|jpeg|jpg|gif|svg)$/,
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.png', '.jpg', '.svg', '.gif'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html',
      chunksSortMode: 'dependency',
      chunks: ['common', 'app'],
      favicon: 'example/favicon.ico',
      minify: false,
    }),
  ],
};
