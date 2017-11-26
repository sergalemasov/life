
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var root = path.join.bind(path, path.resolve(__dirname));

module.exports = function (options) {
  return {
    devtool: 'cheap-eval-source-map',
    entry: {
      'main': path.join(root('src'), 'index.js')
    },

    output: {
      path: root('dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[file].map',
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(root('src'), 'index.html')
      })
    ],

    devServer: {
      open: true,
      progress: true,
      port: 3000,
      host: 'localhost',
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  }
}