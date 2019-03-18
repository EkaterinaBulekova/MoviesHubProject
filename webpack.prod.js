const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        extractComments: 'all',
        //sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        }
      ]
    },
    
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ],

  });