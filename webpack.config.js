var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [ {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
          presets: ['react', 'es2015']
        }
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
