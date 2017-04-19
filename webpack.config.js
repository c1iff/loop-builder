
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [ {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
          presets: ['react', 'es2015']
        }
    }]
  }
}
