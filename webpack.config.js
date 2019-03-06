const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: './src/main.js',

    output: {
      filename: 'bundle.js'
    },

    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },
    
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },

    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new webpack.HotModuleReplacementPlugin()
    ],
    
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };