const path = require("path");
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
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true,
        // publicPath: '/' // 能設定對應的公開目錄前綴路徑, 當載入外部資源 ex: image 等。
    },

    plugins: [
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
                            // publicPath: '../'  // 是專案結構調整路徑
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
