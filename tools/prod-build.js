require('babel-register');

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');

rimraf.sync(path.resolve(__dirname, '../public/js'));

const config = {
    entry: [
        'babel-polyfill',
        './src/client.js',
    ],
    output: {
        path: path.resolve(__dirname, '../public/js'),
        filename: 'main.[hash].js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'react-hot-loader',
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash]',
                    limit: 10000,
                },
                include: 'public'
            },
        ],
    },
    bail: true,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
        }),
        // todo: do I need this ? really
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
};

webpack(config, (err, stats) => {

    if(err) {
        console.log(err.message);
    }
    else {
        const fileNames = {
            mainJs: stats.toJson().assetsByChunkName.main,
        };

        fs.writeFile(path.resolve(__dirname, '../assets.json'), JSON.stringify(fileNames), 'utf8');
    }
});