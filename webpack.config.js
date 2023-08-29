const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',

  devtool: 'inline-source-map',
  devServer: {

    static: './dist',

  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Restaurant',

    })

  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
      },
    ]
  }
},


//remember polyfill