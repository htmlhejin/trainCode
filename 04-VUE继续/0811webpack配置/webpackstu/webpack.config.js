const path = require("path")
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.js",     //表示要打包的文件
    output: {       
        filename: "bundle.js",  //打包后的文件名
        //resolve是一个库，用于帮助找到模块的绝对路径
        path:path.resolve(__dirname,"dist") //打包后文件所在路径
    },
    //配置插件
    plugins:[       
        new HtmlWebpackPlugin({     //new操作创建一个HtmlWebpackPlugin插件实例
            title:"Hello World~",
            filename:"index.html",   //根据模板生成的文件名
            template:"./src/index.html"   //根据模板./src/index.html生成一个index.html(filename)文件
        })
    ],
    //loader  可以将所有类型的文件转化为webpack能处理的有效模块
    module:{    
        // module.rules允许在一个webpack配置中指定多个loader
        rules:[
        //加载 css
            {
                test:/\.css$/,      //test标识出应该被对应的loader进行转换的某个或某些文件
                use:[       //use表示转换时使用哪一个模块
                    "style-loader",  // 解析css，变成style标签插入到页面中
                    "css-loader"   //解析css语法，解析成js语法
					// loader从下向上(从后向前)执行，下=先解析css语法，再转换成style标签插入到页面中
                ]
            },
            // 加载图片
            {
                test:/\.(PNG|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            //加载字体
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },      
    devServer:{     //本地服务器
        port:8080,
        hot:true    //热更新--自动更新
    }
}