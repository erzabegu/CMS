const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            process: "process/browser",
            src: path.resolve(".", "src"),
            "reader/molecules": path.resolve(".", "src/components/molecules"),
            "reader/organisms": path.resolve(".", "src/components/organisms"),
            "reader/templates": path.resolve(".", "src/components/templates"),
            "reader/layouts": path.resolve(".", "src/components/layouts"),
            "reader/atoms": path.resolve(".", "src/components/atoms"),
            "reader/pages": path.resolve(".", "src/components/pages"),
            "reader/services": path.resolve(".", "src/services"),
            "reader/routes": path.resolve(".", "src/routes"),
            "reader/styles": path.resolve(".", "src/styles"),
            "reader/enums": path.resolve(".", "src/enums"),
            "reader/hooks": path.resolve(".", "src/hooks"),
            "reader/store": path.resolve(".", "src/store"),
            "reader/types": path.resolve(".", "src/types"),
            "reader/utils": path.resolve(".", "src/utils"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: 'file-loader',
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
}