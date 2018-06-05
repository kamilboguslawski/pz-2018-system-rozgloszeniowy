const path = require("path");

module.exports = {
    entry: {
        './src/main/js/src/app.bundle.js': './src/main/js/src/index.js',
        './target/classes/static/js/app.bundle.js': './src/main/js/src/index.js',
    },
    devtool: 'sourcemaps',
    output: {
        path: path.resolve(__dirname, "./"),
        filename: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
};