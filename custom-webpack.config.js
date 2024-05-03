const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'APPLICATION_VERSION': JSON.stringify(require('./package.json').version)
    })
  ]
};