var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var markdownItAnchor = require('markdown-it-anchor')
var markdownItFootnote = require('markdown-it-footnote')

const vueMarkdown = {
    use: [
        [markdownItAnchor, {
            level: [1, 2, 3]
        }],
        markdownItFootnote
    ]
}

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    // 入口
    entry: {
        main: './docs/src/main',
        demo: './docs/src/demo',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, '../docs/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [{
            test: /\.md$/,
            loader: 'vue-markdown-loader',
            options: vueMarkdown
        }]
    },
    devServer: {
        port: 9000,
        // host: '0.0.0.0',   // 外部可访问
        historyApiFallback: {
            rewrites: [{
                from: /^\/demo/,
                to: '/demo.html'
            }]
        }
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all"
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['vendors', 'main'],
            inject: true,
            filename: path.join(__dirname, '../docs/dist/index.html'),
            template: path.join(__dirname, '../docs/src/index.html')
        }),
        new HtmlWebpackPlugin({
            chunks: ['vendors', 'demo'],
            inject: true,
            filename: path.join(__dirname, '../docs/dist/demo.html'),
            template: path.join(__dirname, '../docs/src/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
