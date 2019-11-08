const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const passport = require("passport")

const app = express()

app.use('*', function (req, res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next()
});

// 连接数据库
mongoose.connect("mongodb://192.168.1.115:27017/dj",{useNewUrlParser:true}).then((data)=>{
    console.log("连接成功啦！")
}).catch((err)=>{
    console.log(err)
})

// 配置bodyPaser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置passport
app.use(passport.initialize());
require("./config/passport")(passport)


// 引入对应路由模块
const admins = require("./routes/api/admins")
const forums = require("./routes/api/forums")
const summarys  = require("./routes/api/summarys")
const reports  = require("./routes/api/reports")
const userlist = require('./routes/api/userlist')
const focus = require('./routes/api/focus')
const comments = require('./routes/api/comments')
const news = require('./routes/api/news')


// 一级路由
// 管理员模块
app.use("/api/admin",admins)
// 党员发帖模块
app.use("/api/forum",forums)
// 心得总结模块
app.use("/api/summary",summarys)
// 思想汇报模块
app.use("/api/report",reports)
//用户列表路由
app.use('/api/userlist',userlist)
//轮播图列表路由
app.use('/api/focus',focus)
//评议列表路由
app.use('/api/comments',comments)
//新闻列表路由
app.use('/api/news',news)



// 监听器3000
app.listen(3000)