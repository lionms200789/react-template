const path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(CommonConfig, {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[id].chunk.js",
    libraryTarget: "umd",
    library: ["[name]"],
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 8080,
    open: true,
    inline: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
