const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
/* const MiniCssExtractPlugin = require('mini-css-extract-plugin') */
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const cssExtract = new ExtractTextWebpackPlugin('css/css.css')
const lessExtract = new ExtractTextWebpackPlugin({
    filename: 'css/less.css'
})

// const WebpackManifestPlugin = require('webpack-manifest-plugin')
// const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
        //commen: ['./src/a.js','./src/b.js']
    },
    output: {
        filename: '[name]_bundle.[hash:8].js',
        path: resolve(__dirname, './dist'), // 用绝对路径
        // publicPath: 'http://cdn.nodejs8.com.cn/'
    },
    mode: 'development',
    devServer: {
        contentBase: './dist',
        compress:true,
        inline: true,
        port: 8080,
        open: true,
        hot: true
    },
    // 会将 process.env.NODE_ENV 的值设为 production ，体积更小
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'HtmlWebpackPlugin Title', // 模板里 <title><%=HtmlWebpackPlugin.options.title%></title> 
            template: './src/template.html',
            inject: "body", // 默认就是 true || "head" 放 body 最后
            // minify: {
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // },
            hash: true,
            chunks: ['app','commen']
            //excludeChunks:['commen'],
            
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'commen.html',
        //     title: 'HtmlWebpackPlugin Title', // 模板里 <title><%=HtmlWebpackPlugin.options.title%></title> 
        //     template: './src/template.html',
        //     inject: "body", // 默认就是 true || "head" 放 body 最后
        //     // minify: {
        //     //     collapseWhitespace: true,
        //     //     removeAttributeQuotes: true
        //     // },
        //     hash: true,
        //     chunks: ['commen']
        //     //excludeChunks:['commen'],
            
        // }),

        // new WebpackManifestPlugin({
        //     fileName: 'my-manifest.json',
        //     // basePath: '/app/',
        //     // publicPath: 'http://cdn.nodejs8.com.cn/',
        // }),

        /* new MiniCssExtractPlugin({
            filename : 'css/css.css'
        }) */

        // new MinifyPlugin(),

        /* new ExtractTextWebpackPlugin('css/main.css') */
        lessExtract,
        cssExtract
    ],
    module: {
        rules: [
            /* { test: /\.css$/, use: [
                MiniCssExtractPlugin.loader,
                {loader: 'css-loader'}
            ] }, 
            //先执行 css-loader 转换成css 代码；然后 style-loader 将代码插入 style 模块
            { test: /\.less$/, use: [
                MiniCssExtractPlugin.loader,
                {loader: 'css-loader'},
                {loader: 'less-loader'}
            ] },   */
            { test: /\.css$/, use: cssExtract.extract({
                    use: ['css-loader']
                })
             }, 
            //先执行 css-loader 转换成css 代码；然后 style-loader 将代码插入 style 模块
            { test: /\.less$/, use: lessExtract.extract({
                    use: ['css-loader','less-loader']
                })
            },   
            { test: /\.(jpg|png|gif|svg|ico)$/, use: [ 'file-loader' ] },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] },
            { test: /\.(csv|tsv)$/, use: [ 'csv-loader' ] },
            { test: /\.xml$/, use: [ 'xml-loader' ] }
        ]
    },
    // 配置解析
    resolve: {} 
    
}
/* 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
* 我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。
* 这对于需要拆分成多个文件的复杂配置是非常有用。
* npx webpack --config webpack.config.js

* 注意，当在 windows 中通过调用路径去调用 webpack 时，必须使用反斜线(\)。
* 例如 node_modules\.bin\webpack --config webpack.config.js。
*/