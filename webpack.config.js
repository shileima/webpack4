const { resolve } = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                'xml-loader'
                ]
            }
        ]
    }
}
/* 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
* 我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。
* 这对于需要拆分成多个文件的复杂配置是非常有用。
* npx webpack --config webpack.config.js

* 注意，当在 windows 中通过调用路径去调用 webpack 时，必须使用反斜线(\)。
* 例如 node_modules\.bin\webpack --config webpack.config.js。
*/