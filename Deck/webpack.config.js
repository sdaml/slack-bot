const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './index'
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    plugins: [
        new WebpackNotifierPlugin()
    ],
    module: {
        preloader: [{
            test: /\.(js|jsx)$/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.md$/,
            loader: 'html!highlight!markdown?gfm=true&smartpants=true'
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                env: {
                    development: {
                        plugins: [['react-transform', {
                            transforms: [{
                                transform: 'react-transform-hmr',
                                imports: ['react'],
                                locals: ['module']
                            }]
                        }]]
                    }
                }
            }
        }, {
            test: /\.(css|scss)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: __dirname
        }, {
            test: /\.svg$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml',
            include: path.join(__dirname, 'assets')
        }, {
            test: /\.png$/,
            loader: 'url-loader?mimetype=image/png',
            include: path.join(__dirname, 'assets')
        }, {
            test: /\.gif$/,
            loader: 'url-loader?mimetype=image/gif',
            include: path.join(__dirname, 'assets')
        }, {
            test: /\.jpg$/,
            loader: 'url-loader?mimetype=image/jpg',
            include: path.join(__dirname, 'assets')
        }]
    }
};

if (isProd) {
    config.plugins = config.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]);
} else {
    config.devServer = {
        contentBase: 'public',
        historyApiFallback: true
    };
    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ]);
}

module.exports = config;
