const path = require("path");

module.exports = {
    entry: {
        'src/main/resources/static/js/app.bundle': './src/main/js/src/index.js',
        'target/classes/static/js/app.bundle': './src/main/js/src/index.js',
    },
    devtool: 'sourcemaps',
    output: {
        path: path.resolve(__dirname, "./"),
        filename: '[name].js'
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