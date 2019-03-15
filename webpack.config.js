const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {

    entry: './src/index.js',

    output: {
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: [
              "css-hot-loader",
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
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({
        template: "./src/index.html",
        filename: "main.css"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      contentBase: './dist',
      hot: true
    }
  };