const webpack = require('webpack');
const loriConfig = require('./lori.config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

/**
 * Now the output file and path
 * this is where our js file will be output
 * to at compilation time
 */
module.exports.output = {
	path: loriConfig.publicDir+'/assets',
	filename: 'app.js',
	publicPath: 'assets/'
};

/**
 * Define our resolve object
 * it is empty by default
 */
module.exports.resolve = {};

/**
 * Watch webpack when not in production
 */
module.exports.watch = true;

/**
 * Within our resolve object we will define
 * aliaes we want to resolve.
 */
module.exports.resolve.alias = {
	ENV: loriConfig.env,
	AppConfigs:  loriConfig.devDir+'/configs/app.config.js',
	RoutesConfig:  loriConfig.devDir+'/configs/routes.config.js'
};

/**
 * Now we define our modules
 * this will contains the rules and loaders
 * used to translate and compile our application files
 * into one file (output file)
 */
module.exports.module = {
	rules: [
		{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			include: loriConfig.devDir
		},
		{
			test: /\.less$/,
			use: loriConfig.extractLess.extract({
				fallback: 'style-loader',
				use: [
					{
						'loader': 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
					},
					{
						'loader': 'resolve-url-loader'
					},
					{
						'loader': 'less-loader'
					}
				]
			}),
			include: loriConfig.devDir
		},
		{
			test: /\.s?css$/,
			use: loriConfig.extractScss.extract({
				fallback: 'style-loader',
				use: [
					{
						loader: 'css-loader?modules&modules=true&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}),
			include: loriConfig.devDir
		},
		{ 
			test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
			use: {
				loader: 'file-loader',
				options: {
					name: 'images/[sha512:hash:base64:7].[ext]',
					outputPath: '',
					publicPath: '/assets/'
				}
			},
			include: loriConfig.devDir
		},
		{ 
			test: /\.(woff2?|ttf|eot|otf)$/,
			use:{
				loader: 'file-loader',
				options:{
					name: 'fonts/[name].[ext]',
					outputPath: '',
					publicPath: '/assets/'
				}
			},
			include: loriConfig.devDir
		}
	]
};

/**
 * We will start by defining our plugins.
 * These are environment specific, we will add
 * more plugins as the environment may require
 */
module.exports.plugins = [
	loriConfig.extractLess,
	loriConfig.extractScss,
	new FriendlyErrorsWebpackPlugin()
];

// if in production
if(loriConfig.isProduction){
	// concat extra plugins to webpack config
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			},
			comments: false,
		}),
		new webpack.optimize.AggressiveMergingPlugin()
	]);
}

/**
 * set devtool
 */
module.exports.devtool = loriConfig.isProduction ? 'cheap-module-source-map' : 'source-map';

/*
 *******************************
 * Stats
 *******************************
 *
 * By default, Webpack spits a lot of information out to the terminal,
 * each you time you compile. Let's keep things a bit more minimal
 * and hide a few of those bits and pieces. Adjust as you wish.
 *
 */
module.exports.stats = {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: false
};

module.exports.performance = { hints: false };