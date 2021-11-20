const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry:  {
    utils : __dirname + "/src/views/js/utils.js",
  },
  target: 'web',
  output: {
    path: __dirname + "/public/js",
    filename: "[name].js",
    sourceMapFilename: "[name].js.map"
  },
  devtool: "source-map",
  plugins: [
    new webpack.ProvidePlugin({ process: 'process/browser' }),
    new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] })
  ],
};


