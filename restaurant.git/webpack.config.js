const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
  
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'restaurant.git./dist'),
    filename: 'main_bundle.js',
  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Restaurant',

    }),

  ],
};