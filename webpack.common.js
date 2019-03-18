const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {

    entry: './src/index.js',

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
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
          test: /\.(png|jpg)$/,
          loader: 'file-loader?name=[path][hash][name].[ext]'
        }
      ]
    },
    
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Movie App",
        hash: true,
        template: "./src/index.html"
      })
    ]
  };