const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    //App entry point
    entry: path.join(__dirname, './src/index.js'),

    //Output Directory
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js' 
    },

    //Enviroment Mode
    mode: process.env.NODE_ENV || 'development',

    //Path Resolve
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },

    //Plugins

    plugins: [HtmlWebpackPluginConfig],

    //Dev Server Entry Point
     devServer: {
        static: {
            directory: path.join(__dirname, 'src')
        },
           port: 3000,

        devMiddleware: {
             publicPath: 'http://localhost:3000'
        },
        //hot only
        hot: "only" //hot true
        
    } 

};