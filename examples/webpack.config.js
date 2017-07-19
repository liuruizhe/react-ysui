const path = require('path');

module.exports = {
  entry: {
    app: ['./examples/app/index.js'],
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader',
      }, {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      'react-ysui': path.resolve(__dirname, '../src/index.js'),
    },
    extensions: ['.js', '.jsx', '.scss', '.css', '.png', '.jpg', '.svg', '.gif'],
  },
  devtool: 'source-map',
};
