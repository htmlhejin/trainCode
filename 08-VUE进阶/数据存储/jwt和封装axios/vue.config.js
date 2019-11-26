let path=require('path')
module.exports={
    // publicPath可以配置开发环境或生产环境的url
    publicPath:process.env.NODE_ENV==='production' ? 'http://www.abcd.cn' : '/',

    // 打包后的文件放入assets中，public中的文件不会被打包，assets中的文件可以被打包
    assetsDir:"assets",

    // 打包后不使用map文件
    productionSourceMap:false,

    // false  不使用内部模板 --true的话默认访问内部模板，一般为false
    runtimeCompiler:false,

    // 配置目录别名
    chainWebpack:config=>{
        config.resolve.alias.set('_c',path.resolve(__dirname,'src/components'))
        config.resolve.alias.set('_v',path.resolve(__dirname,'src/views'))
    },

    // webpack配置，到时候会合并到默认的webpack中
    configureWebpack:{
        plugins:[],
        module:{}
    },

    devServer:{  //开发服务器，上线不需要
        // 配置代理
        proxy:{
            '/api/getUser':{
                target:"http://localhost:3030",
                pathRewrite:{
                    '^/api':'', //把api 去掉
                }
            }
        }
    }

};