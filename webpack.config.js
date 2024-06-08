// import webpack from 'webpack'

// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const isProduction = process.env.NODE_ENV == 'production'

// const config = {
//     entry: {
//         employees: './src/employees.jsx',
//     },
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'public'),
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//             },
//         ],
//     },
//     optimization: {
//         splitChunks: {
//             name: 'vendor',
//             chunks: 'all',
//         },
//     },
//     devtool: 'source-map'
// }

// export default function() {
//     if (isProduction) {
//         config.mode = 'production'    
//     } else {
//         config.mode = 'development'
//     }
//     return config
// }
import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        employees: './src/employees.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // Matches .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        },
    },
    devtool: 'source-map',
    mode: isProduction ? 'production' : 'development'
};

export default config;