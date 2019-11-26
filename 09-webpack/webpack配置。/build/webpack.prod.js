// 对生成的css文件进行压缩
const OptimizeCssAssetsPlugin=require("optimize-css-assets-webpack-plugin")
// 对打保护的文件bundle.js压缩
const TerserPlugin=require("terser-webpack-plugin")
module.exports={
    mode:"production",
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin(),    
            new TerserPlugin()   // 手动压缩打包后的文件
        ]
    }
}