const express = require("express")
const Forum = require("../../model/Forum")
const passport = require("passport")  //验证token
const router = express.Router()

// 党员发帖模块
// 添加帖子接口
router.post("/forumList.add",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const forum = {}
    forum.userName = req.body.userName
    forum.userId = req.body.userId
    forum.check = req.body.check
    forum.type = req.body.type
    forum.replay = req.body.replay
    forum.pic = req.body.pic
    new Forum(forum).save()
    .then(forum=>{res.json(forum)})//成功
    .catch(err=>{console.log(err)})//失败
})

// 获取所有帖子数据接口
router.get("/forumList.do",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Forum.find().then(forum=>{
        if(!forum){
            return res.status(404).json("没有该数据")
        }
        res.json(forum)
    })
})

// 获取某个帖子数据接口
router.get("/forumList.do/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Forum.findOne({_id:req.params.id}).then(forum=>{
        if(!forum){
         return res.status(404).json("没有该数据")
        }
        res.json(forum)
    })
})

// 删除帖子接口
router.get("/forumList.delete/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Forum.findOneAndDelete({_id:req.params.id}).then(forum=>{
        res.status(200).json("删除成功啦！")
    })
})

// 编辑帖子接口
router.post("/forumList.edit/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const forum = {}
    forum.userName = req.body.userName
    forum.userId = req.body.userId
    forum.check = req.body.check
    forum.type = req.body.type
    forum.replay = req.body.replay
    forum.pic = req.body.pic
    Forum.findOneAndUpdate({_id:req.params.id},{$set:forum},{new:true})
    .then(forum=>{res.json(forum)})
})











module.exports = router