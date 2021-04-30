const path = require('path');

// Plugins
const FsWebpackPlugin = require('fs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'web',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].bundle.js',
    chunkFilename: '[chunkhash].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js?x/,
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    }, {
      test: /\.png|jpg/,
      loader: 'url-loader',
      include: path.resolve(__dirname, 'src')
    }, {
      test: /\.md/,
      loader: 'raw-loader',
      include: path.resolve(__dirname, 'src')
    }]
  },
  plugins: [
    new FsWebpackPlugin([{
      type: 'delete',
      files: 'dist',
      hooks: ['initialize']
    }]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      title: 'Thieves Guild'
    })
  ]
};
