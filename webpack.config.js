const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'MyReactComponent',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.svg', '.png', '.jpg', '.jpeg', '.gif'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                            publicPath: 'assets/images'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    }
};
