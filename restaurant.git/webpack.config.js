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

  module: {
    rules: [
      // Define rules for processing different types of files
      {
        test: /\.js$/, // Apply the rule to .js files
        exclude: /node_modules/, // Exclude files from node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for .js files
        },
      },
      // Add more rules for other file types like stylesheets, images, etc.
    ],
  },
  // Other configurat
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {

    runtimeChunk: 'single',

  },
}


//remember polyfill