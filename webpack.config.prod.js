
'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./example/app.jsx'],
    react: ['react', 'react-dom', 'react-router'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:8].js',
  },
  module: {
    loaders: [{
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
      }),
      // loader: 'style-loader!css-loader!sass-loader',
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
      exclude: /node_modules/,
    }, {
      test: /\.(ico|png|jpeg|jpg|gif|svg)$/,
      loader: 'file-loader',
      query: {
        name: '[name]-[hash:8].[ext]',
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.png', '.jpg', '.svg', '.gif'],
  },
  devtool: 'source-map',
  plugins: [
    // 生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // js文件的压缩
    new UglifyJSPlugin({
      compress: {
        warnings: false,
      },
      exclude: [/node_modules/],
      mangle: {
        except: ['$super', '$', 'exports', 'require', 'window',
          'webpack', 'webpackJsonpCallback'],
      },
      sourceMap: true,
    }),
    // 将样式抽离出来作为单独的文件
    new ExtractTextPlugin('[name]-[contenthash:8].css'),
    // 生成页面
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html',
      chunksSortMode: 'dependency',
      chunks: ['react', 'app'],
      favicon: 'example/favicon.ico',
      minify: false,
    }),
  ],
};
