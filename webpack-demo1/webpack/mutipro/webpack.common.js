const path = require('path');
const { srcPath, distPath } = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(srcPath,'index.js'),
    output: {
        path: path.join(distPath), // string
        filename: "index.bundle.js", // string
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: path.join(srcPath,'index.html')
            }
        )
    ],

    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all',
        cacheGroups: {
          vender: {
            name: "vender",
            priority: 1,
            test: /node_modules/,
            minSize: 0,
            minChunks: 1
          },

          common:{
            name: "common",
            priority: 0,
            minSize: 0,
            minChunks: 2
          }
        }
      }
    }
}