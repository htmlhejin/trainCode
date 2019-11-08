const express = require("express")
const Summary = require("../../model/Summary")
const passport = require("passport")  //验证token
const router = express.Router()

// 总结列表模块
// 添加总结接口
router.post("/summaryList.add",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const summary = {}
    summary.userName = req.body.userName
    summary.status = req.body.status
    summary.reason = req.body.reason
    new Summary(summary).save()
    .then(summary=>{res.json(summary)})//成功
    .catch(err=>{console.log(err)})//失败
})

// 获取所有总结数据接口
router.get("/summaryList.do",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Summary.find().then(summary=>{
        if(!summary){
            return res.status(404).json("没有该数据")
        }
        res.json(summary)
    })
})

// 获取某个总结数据接口
router.get("/summaryListsin.do/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
        // console.log(req.params.id)
    Summary.findOne({_id:req.params.id}).then(summary=>{
        if(!summary){
         return res.status(404).json("没有该数据")
        }

        res.json(summary)
    })
})

// 删除总结接口
router.get("/summaryList.delete/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Summary.findOneAndDelete({_id:req.params.id}).then(summary=>{
        res.status(200).json("删除成功啦！")
    })
})

// 编辑总结接口
router.post("/summaryList.edit/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const summary = {}
    summary.userName = req.body.userName
    summary.status = req.body.status
    summary.reason = req.body.reason
    Summary.findOneAndUpdate({_id:req.params.id},{$set:summary},{new:true})
    .then(summary=>{res.json(summary)})
})











module.exports = router