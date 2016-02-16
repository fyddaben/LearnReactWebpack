var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react/lib/ReactDom.js');
module.exports = {
  entry:[
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'app/main.js')
  ],
  resolve: {
    alias: {
      'react': pathToReact,
      'reactDOM': pathToReactDom
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css?$/,
        loader:'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
    noParse: [pathToReact]
  }
};
