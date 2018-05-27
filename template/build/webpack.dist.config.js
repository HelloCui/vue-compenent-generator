var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const camelCase = require('camelcase');


module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        library: camelCase('{{name}}'),
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/assets/styles/reset.css'),
            to: path.resolve(__dirname, '../dist/reset.css')
        }])
    ],
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    }
});
