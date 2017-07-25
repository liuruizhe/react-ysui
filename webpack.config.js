
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./example/app.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.(css|scss)/,
      loader: 'style-loader!css-loader!sass-loader',
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
      exclude: /node_modules/,
    }, {
      test: /\.(ico|png|jpeg|jpg|gif|svg)$/,
      loader: 'file-loader',
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
      chunks: ['app'],
      favicon: 'example/favicon.ico',
      minify: false,
    }),
  ],
};
