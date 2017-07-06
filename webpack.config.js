
var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/client/main.js',
  module: {
       loaders: [{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
       }]
   },
   externals: {
       cheerio: 'window',
       'react/addons': true,
       'react/lib/ExecutionEnvironment': true,
       'react/lib/ReactContext': true,
     },
  output: {
    path: __dirname + '/src/static/',
    filename: 'bundle.js'
  },
  devServer: { inline: true }
}
