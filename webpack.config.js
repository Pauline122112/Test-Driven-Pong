module.exports = {
  entry: './index.html',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
