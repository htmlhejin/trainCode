// koa-static   托管静态资源

const Koa=require("koa")
const server=require("koa-static")
const app=new Koa()
// console.log(__dirname)  //D:\huashantrain\1907--1912\06-node\08-koa
app.use(server(__dirname+"/public"))    //public前的/不要忘记

app.listen(3000)