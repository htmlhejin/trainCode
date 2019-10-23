const path=require("path")
module.exports={
    mode:"development",
    devServer:{ 
        //开启一个前端服务器，默认端口是8080，将端口修改为3000
        port:3000,  //  Project is running at http://localhost:3000/
        compress:true,  /// 对项目压缩
        contentBase:path.resolve(__dirname,"../dist")   //，默认托管/下的内容，内存中托管dist目录下的文件
    }
}