// 基础配置，执行命令时告诉webpack就不能执行webpack.config.js文件了，执行webpack.base.js
const dev=require("./webpack.dev")
const prod=require("./webpack.prod")
const merge=require("webpack-merge")   // 合并配置文件
const path=require("path")
// 生成html文件，使用脚本标记在正文中，包含webpack所有包
const HtmlWebpackPlugin=require("html-webpack-plugin") 
// 清除无用的模块
const {CleanWebpackPlugin} =require("clean-webpack-plugin")
// 把css专门打包成一个文件，生成外部样式
const MiniCssExtractPlugin=require("mini-css-extract-plugin")


// 根据模板在内存中生成h5文件，并引入bundle,js
module.exports=(env)=>{
    // console.log(__dirname);  // D:\huashantrain\1907--1912\09-webpack\build
    // console.log(path.resolve(__dirname,"../src/index.js"))   // D:\huashantrain\1907--1912\09-webpack\src\index.js
    let isDev=env.development;
    const base={
        entry:path.resolve(__dirname,"../src/index.js"),
        output:{
            filename:"bundle.js",
            path:path.resolve(__dirname,"../dist")
        },
        plugins:[
            !isDev && new MiniCssExtractPlugin({
                filename:"css/main.css"
            }),
            new HtmlWebpackPlugin({
                // filename:"1.html",    // 默认生成的文件名和模板的一样
                template:path.resolve(__dirname,"../public/index.html"),
                minify:!isDev && {
                    removeAttributeQuotes:true,   // 生成的html文件去掉引号
                    collapseWhitespace:true    //去掉换行符
                }
            }),
            new CleanWebpackPlugin(),
        ].filter(Boolean),   //  仅仅在生成环境下才打包成一个专门的css文件
        //  [].filter(Boolean)   过滤出真值，
        module:{  // 引入一些loader可以把一些文件转成webpack能够处理的有效模块
            rules:[
                {
                    test:/\.js$/,
                    use:"babel-loader"
                },
                {
                    test:/\.css$/,
                    use:[
                        // 'style-loader',   // 生成内部样式
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {loader:'css-loader',options:{importLoaders:2}},
                        'postcss-loader',  // 给css3中的某些属性加前缀
                        'sass-loader'
                    ]
                },
                {
                    test:/\.scss$/,
                    use:[
                        'style-loader',
                        'css-loader',
                        {
                            loader:'sass-loader'
                        }
                    ]
                },
                {
                    test:/\.(jpg|png|jpeg|gif)$/,
                    use:[
                        {
                            loader:'url-loader',
                            options:{
                                name:"image/[name].[hash:7].[ext]",  // hash避免重名
                                limit:1024*300   // 小于315kb的图片进行base64转换   文件名是base64(字符串)，不满足条件不转换，文件名不会变
                            }
                        }
                        // 'file-loader'
                    ]
                }
            ]
        }
    }
    
    if(isDev){
       return merge(base,dev)   //合并之后需要返回，不返回还是执行默认文件
    }else{
        return merge(base,prod)
    }

}

// 得到打包的模式
// module.exports=(env)=>{
//     // console.log(env)  // { development: true }   { production: true }
// }