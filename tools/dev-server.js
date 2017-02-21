
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const contentBase = `http://localhost:${CONTENT_PORT}`;

const config = {
    entry: [
        'babel-polyfill',
        `webpack-dev-server/client?${contentBase}`,
        'webpack/hot/only-dev-server',
        './src/client.js',
    ],
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: `${contentBase}/`,
        filename: 'client-bundle.js',
    },
    devtool: 'source-map',
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
                    name: '[hash].[ext]',
                    limit: 10000,
                },
                include: 'public'
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

const compiler = webpack(config);

const options = {
    proxy: {
        '*': contentBase,
    },
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    stats: {
        colors: true,
    },
};

const devServer = new WebpackDevServer(compiler, options);

devServer.listen(CONTENT_PORT);
