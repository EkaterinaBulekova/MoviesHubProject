const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require("path");

module.exports =  merge (common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist-dev')
  },
  devtool: 'inline-source-map',
  module:{
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        }
      ]
    },
    
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
      contentBase: './dist-dev',
      //hot: true
    }
  });