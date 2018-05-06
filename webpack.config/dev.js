/**
 * Created by pengyunlong on 2018/5/6.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '..')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//配置文件合并
module.exports = merge(baseConfig, {
    entry: [
        path.join(root, 'src/js/main.js'),
        'webpack/hot/dev-server' // 热替换处理入口文件
    ],
    devServer: {
        historyApiFallback: true, // 404的页面会自动跳转到/页面
        inline: true, // 文件改变自动刷新页面
        // progress: true, // 显示编译进度 !!有坑，待解决。下同～ 暂时不加这两个属性继续走下去吧～！
        //colors: true, // 使用颜色输出
        port: 3800, // 服务器端口  ！！注意不要被占用了哦
    },
    devtool: 'source-map', // 用于标记编译后的文件与编译前的文件对应位置，便于调试
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(), // 添加热替换插件
        new HtmlWebpackPlugin({
            template:path.join(root, 'src/index.html'),
            inject: 'body', // js的script注入到body底部
            hash: true
        })
    ],
})
