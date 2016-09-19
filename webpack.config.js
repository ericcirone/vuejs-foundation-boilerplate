var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractSCSS = new ExtractTextPlugin('styles/app.css');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    externals: {
        "jquery": "jQuery",
        "foundation": "Foundation"
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            loader: extractSCSS.extract(['css-loader', 'sass-loader']),
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file',
            query: {
                name: 'assets/[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        extractSCSS,
        new CleanWebpackPlugin(['dist'], {})
    ],
    postcss: function () {
        return [autoprefixer];
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "node_modules")]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
