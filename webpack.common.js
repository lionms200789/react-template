const path = require("path");

let CommonConfig = {
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            "@asset": path.resolve(__dirname, "src/assets/"),
            "@base": path.resolve(__dirname, "src/js"),
            "@style": path.resolve(__dirname, "src/sass"),
            "@images": path.resolve(__dirname, "src/assets/images"),
            "@icons": path.resolve(__dirname, "src/assets/icons"),
        },
        modules: ["node_modules"],
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            [
                                "@babel/preset-react",
                                {
                                    runtime: "automatic",
                                },
                            ],
                        ],
                        plugins: ["@babel/plugin-transform-runtime"]
                    },
                },
            },
            {
                test: /\.svg/,
                type: "asset/source", //["@svgr/webpack"], 視使用情況可改用 package @svgr/webpack
            },
        ],
    },
};

module.exports = CommonConfig;
