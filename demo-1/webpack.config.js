
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlWebPackPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), //根据页面在内存里面生成
    filename: 'index.html'
})

//默认打包入口文件 index.js  webpack 4
module.exports = {
    //development：main.js 不会被压缩 
    //production : main.js 会被压缩
    mode: 'production',
    plugins: [
        htmlWebPackPlugin
    ],
    //第三方模块
    module: {
        rules: [ //第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}