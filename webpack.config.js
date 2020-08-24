const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: path.resolve(__dirname,'./app/app.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        }, {
            test: /\.html$/i,
            loader: 'html-loader',
        }, {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: [
                'file-loader',
            ],
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['angularjs-annotate'],
                },
            },
        }],
    },
    optimization: {
        moduleIds: 'hashed',
    },

}