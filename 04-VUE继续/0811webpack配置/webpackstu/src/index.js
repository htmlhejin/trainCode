// index.js是js的入口文件
require("./css/index.css")
let rs= require("./js/user");
console.log(rs)     //require is not defined 浏览器会报错，不能识别require
console.log("hello")