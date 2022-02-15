const path = require('path');
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, 'src')
}

module.exports = merge(CommonConfig, {
	mode: 'production',
	entry: {
		app: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, './wwwroot'),
		filename: 'js/[name].min.js',
		chunkFilename: 'js/[id].chunk.js',
		libraryTarget: 'umd',
		library: ['[name]'],
		assetModuleFilename: 'images/[hash][ext][query]'
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
		}),
		new CleanWebpackPlugin({
			dry: true,
			verbose: true,
			cleanOnceBeforeBuildPatterns: ['css', 'js'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss|css$/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false,
						},
					},
					{
						loader: 'css-loader',
						options: {
							modules: false,
						},
					},
					'sass-loader',
				],
			},
		],
	}
});
