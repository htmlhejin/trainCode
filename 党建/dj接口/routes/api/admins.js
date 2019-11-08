const express = require("express")
const Admin = require("../../model/Admin")
const bcrypt = require("bcrypt")  //密码加密
const jwt = require("jsonwebtoken")  //生成token
const keys = require("../../config/keys")
const router = express.Router()

// 管理员模块
// 用户注册接口
router.post("/adminRegister.do",(req,res)=>{
   Admin.findOne({adminName:req.body.adminName}).then(admin=>{
        if(admin){
            res.send("用户已被注册！")
        }
       const newAdmin = new Admin({
        adminName:req.body.adminName,
        adminPwd:req.body.adminPwd,
        })
        // 保存之前密码加密
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newAdmin.adminPwd,salt,function(err, hash){
                if(err){
                   console.log(err)
                }else{
                   newAdmin.adminPwd = hash
                   newAdmin.save()
                   .then(admin=>{res.json(admin)})
                   .catch(err=>{res.json(err)})
                } 
            });
        });
    })
})


// 用户登录接口
router.post("/adminLogin.do",(req,res)=>{
  const adminPwd = req.body.adminPwd
  const adminName = req.body.adminName
  Admin.findOne({adminName}).then(admin=>{
      if(!admin){
         return res.status(404).json("用户不存在！")
      }
    // 判断密码与数据库是否一致
      bcrypt.compare(adminPwd,admin.adminPwd).then(isMatch=>{
          if(isMatch){
            // 将用户信息作为token生成的依据
            const token = {
                id:admin._id,
                adminName:admin.adminName,
                adminPwd:admin.adminPwd
            }
            // 生成token
            jwt.sign(token,keys.secretOrkey,{expiresIn:36000000},(err,token)=>{
              if(err) console.log(err)
              res.json({
                  success:true,
                  token:"Bearer "+token
              })
            })
          }else{
            res.status(400).json("密码错误啦！！！")
          }
      })
  })
  
})

module.exports = router