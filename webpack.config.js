const path = require('path');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'jsx',  // Remove this if you're not using JSX
                    target: 'es2015'  // Syntax to compile to (see options below for possible values)
                }
            },
        ],
    },
};