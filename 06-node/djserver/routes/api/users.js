// 有关用户模块的路由

const express = require("express")
const router = express.Router()
// 对密码加密
const bcrypt = require("bcrypt")
// 把model引进来
const User = require("../../model/User")
const keys=require("../../config/keys")
// jsonwebtoken，用来生成token,以后每次登录时带着token登录
// jsonwebtoken是鉴权的一种方式
var jwt = require('jsonwebtoken');
const passport=require("passport")

router.get("/test", (req, res) => {
    res.json({ msg: "hello login" })
})

// 注册接口
router.post("/register", (req, res) => {
    // 看数据库中是否已经存在该用户
    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ "msg": "邮箱已存在" })
        } else {
            // 得到真实数据插入到数据库中
            const newUser = new User({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email
            })
            // 密码加密
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newUser.password, salt, function (err, hash) {
                    if (err) {
                        console.log(err)
                    } else {
                        // 加密后的密码赋给原来的密码
                        newUser.password = hash
                        // 用户信息保存在数据库中
                        newUser.save().then((user) => {
                            res.json(user)
                        }).catch(err => {
                            res.json(err)
                        })
                    }
                })
            })
        }
    })

})

// 登录接口
router.post("/login", (req, res) => {
    // 得到用户登陆时提交的信息
    let email = req.body.email
    let password = req.body.password
    // 根据邮箱，查找数据库，看该用户是否存在
    User.findOne({ email }).then((user) => {
        if (!user) {
            // 用户不存在，响应"用户不存在"，并且结束程序 return 
            return res.status(404).json("用户不存在")
        } else {
            // 用户存在，对比两次输入的密码是否一致
            bcrypt.compare(password, user.password).then((result) => {
                if (result) {
                    // 定义一个用户信息作为token
                    const rule=({
                        id:user.id,
                        email:user.email,
                        name:user.name
                    })           //keys.secretOrkey  盐
                    // 第一个参数是token,第二个参数是盐，第三个参数是token的生命周期,3600秒
                    jwt.sign(rule,keys.secretOrkey,{expiresIn:3600},(err,token)=>{
                        if(err) console.log(err)
                        res.json({
                            success:true,
                            // 返回一个token
                            token:'Bearer ' + token
                        })
                    })
                    // {
                    //     "success": true,
                    //      加盐之后的token
                    //     "token": "BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2FuZ2NhaSIsImVtYWlsIjoiMTIzNDU2QHFxLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHdjNzU3bE9LTzB4aWxpNWpDcUkuSy5XRmgya3hhWGhNZTZKYldIVjBZTlJtYkc3R0taU1F1IiwiaWF0IjoxNTY3NDMxMzQ5LCJleHAiOjE1Njc0MzQ5NDl9.rSSnOkl85oFS3Uygv8cINZmM9KpV--cTNJpQtHEH_jY"
                    // }
                } else {
                    return res.status(400).json("密码错误")
                }
            })
        }
    })


})


// 获取用户信息
// 当客户端带着token访问/current时，首先验证一下token是否合法，合法的话，从token中得到用户信息，返回给用户
// 验证的话，需要加上这一行代码：passport.authenticate('jwt', { session: false })   'jwt'表示验证生成token的方式
// 哪个接口需要验证，就在哪个接口后面添加这样一行代码   passport.authenticate('jwt', { session: false })
router.get("/current",passport.authenticate('jwt', { session: false }),(req,res)=>{
    // res.send("....")
    res.json({
        user:req.user
    })
})

// 添加用户接口
// router.get("/content",(req,res)=>{
//     res.send("hello")
// })

module.exports = router

// 注册接口
// router.post("/register", (req, res) => {
//     let name = req.body.name
//     let email = req.body.email
//     let password = req.body.password

//     User.findOne({ email: email }).then((user) => {
//         if (user) {
//             return res.status(400).json("用户已存在")
//         } else {
//             let newUser = new User({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             })
//             bcrypt.genSalt(10,function(err,salt){
//                 bcrypt.hash(newUser.password,salt,function(err,hash){
//                     if(err) console.log(err)
//                     newUser.password=hash
//                     newUser.save().then((data)=>{
//                         res.json(data)
//                     }).catch(err=>{
//                         res.json(err)
//                     })
//                 })
//             })
//         }
//     })
// })

// 登录接口
// router.post("/login",(req,res)=>{
//     let email=req.body.email
//     let password=req.body.password
//     User.findOne({email}).then(user=>{
//         if(!user){
//             res.status(404).json("用户不存在")
//         }else{
//             bcrypt.compare(password,user.password).then((isMatch)=>{
//                 if(isMatch) res.json({"msg":'success'})
//                 return res.json("密码错误")
//             })
//         }
//     })
// })