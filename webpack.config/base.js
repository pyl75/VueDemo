const path = require('path')
const root = path.resolve(__dirname, '..') // 指向 根目录

module.exports = {
    entry: path.join(root, 'src/js/main.js'),  // 项目入口文件
    output: {
        path: path.join(root, 'dist'),  // 出口目录
        filename: 'js/[name].js'// 出口文件名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },// 所有.vue结尾的文件，使用vue-loader
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },// .js文件使用babel-loader，切记排除node_modules目录
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            // 配置目录别名，来确保模块引入变得更简单
            // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
            components: path.join(root, 'src/components'),
            views: path.join(root, 'src/views'),
            styles: path.join(root, 'src/styles'),
            store: path.join(root, 'src/store'),
        },
        extensions: ['.js', '.vue'], // 引用js和vue文件可以省略后缀名 (此处有坑坑坑＝＝。)!!webpack@2+已经不再要求强制转入一个空字符串
    },
}