const express = require("express")
const router = express.Router()
const passport=require("passport")
// 引进关于profile的model
const Profile=require("../../model/Profile")

// 添加数据的接口
router.post("/add",passport.authenticate('jwt', { session: false }),(req,res)=>{
    // 得到用户提交的数据
    const data={
        type:req.body.type,
        describe:req.body.describe,
        income:req.body.income
    }
    // 实例化model,传递数据，并把数据保存在数据库中
    new Profile(data).save().then(result=>{
        // 保存成功的话，postman测试，响应数据
        res.json(result)
    }).catch(err=>{
        res.json(err)
    })
})

// 获取所有数据的接口
router.get("/list",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Profile.find({}).then(data=>{
        if(data){
            res.json(data)
        }
    }).catch(err=>{
        res.json(err)
    })
})

// 获取单个数据的接口
router.get("/list/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Profile.findOne({_id:req.params.id}).then(data=>{
        if(data){
            res.json(data)
        }
    }).catch(err=>{
        res.json(err)
    })
})

// 编辑数据的接口
router.post("/edit/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    // 得到编辑后的数据
    let dir={
        type:req.body.type,
        describe:req.body.describe,
        income:req.body.income
    }
    // 根据id查找并更新         //{$set:dir}表示更新后的内容    {new:true}表示返回更新的内容而不是查找的内容
    Profile.findByIdAndUpdate({_id:req.params.id},{$set:dir},{new:true}).then(data=>{
        if(data){
            res.json(data)
        }
    }).catch(err=>{res.json(err)})
})

// 删除数据的接口
router.get("/delete/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    // 根据id查找并删除        
    Profile.findByIdAndDelete({_id:req.params.id}).then(data=>{
        if(data){
            res.json(data)
        }
    }).catch(err=>{res.json(err)})
})

module.exports=router
