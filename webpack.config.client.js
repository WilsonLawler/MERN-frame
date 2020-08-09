const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development", // sets process.env.NODE_ENV to development
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ], // where Webpack starts bundling
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js', // client-side code
        publicPath: '/dist/' // specifying the base path for all assets in the application
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enables hot module replacement for react-hot-loader
        new webpack.NoEmitOnErrorsPlugin() // allows skipping emitting when there are compile errors
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom' // point react-dom references to the @hot- loader/react-dom version
        }
    }
}

module.exports = config
