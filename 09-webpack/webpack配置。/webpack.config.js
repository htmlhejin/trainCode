// 配置自己的webpack，遵循commonjs规范

// let path=require("path")
// module.exports={   // 一定是绝对路径
//     mode:"development",  // 开发模式下打包，在这配置之后   "build":"webpack"
//     entry:path.resolve(__dirname,"src/index.js"),  // 对哪个文件打包
//     output:{
//         filename:"bundle.js",  //  打包后的文件名
//         path:path.resolve(__dirname,"dist")  //打包 后的路径
//     }
// }


// module.exports=(env)=>{
//     console.log(env)  // { development: true }   { production: true }
// }