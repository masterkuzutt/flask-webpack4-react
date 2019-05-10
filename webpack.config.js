// Imports: Dependencies
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
require("babel-register");
// Webpack Configuration
const config = {

    // Entry // looks wrong
    entry: { path: './client/src/index.jsx' },
    // Output
    output: {
        path: path.resolve(__dirname, './app/static/js'),
        // path: './app/static/js',
        filename: 'bundle.js',
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    // Loaders
    module: {
        rules: [
            // JavaScript/JSX Files
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // CSS Files
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // }
        ]
    },
    // Plugins
    plugins: [
        new htmlWebpackPlugin({
            template: './app/templates/index_org.html',
            filename: '../../templates/index.html',
            hash: true
        })
    ],
    // OPTIONAL
    // Reload On File Change
    // watch: true,
    // // Development Tools (Map Errors To Source File)
    // devtool: 'source-map',

};
// Exports
module.exports = config;