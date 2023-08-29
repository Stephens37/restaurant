const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    elements: './src/index.js'
  },

  devtool: 'inline-source-map',
  devServer: {

    static: './dist',

  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Restaurant',

    }),

    new NodePolyfillPlugin()

  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {

    runtimeChunk: 'single',

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
        use: [
          {
            loader: 'file-loader',
          },
    ]
  }
],
},
resolve: {
  extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
},
}


//remember polyfill