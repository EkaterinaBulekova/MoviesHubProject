const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',

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