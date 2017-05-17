var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, 
    // {
    //   test: /base\.css$/, // Only .css files
    //   loader: 'style!css', // Run both loaders
    //   include: path.join(__dirname, 'src')
    // }, {
    //   test: /(?<!base)\.css$/, // Only .css files
    //   loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]', // Run both loaders
    //   include: path.join(__dirname, 'src')
    // }, 
    {
      // test: /base.css$/,
      loaders: ['style', 'css'],
      include: path.resolve(__dirname, 'src/base.css')
    },
    {
      test: /\.css$/, // Only .css files
      loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]', // Run both loaders
      include: path.join(__dirname, 'src'),
      exclude: [ path.resolve(__dirname, 'src/base.css')]
    }
    ]

  }
};
