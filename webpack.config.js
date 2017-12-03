module.exports = {
    entry: './src/App.jsx',


    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },

    devServer: {
        port: 3000,
        contentBase: './public'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss?$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devtool: "eval-source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    }
}