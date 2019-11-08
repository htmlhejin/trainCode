const express = require("express")
const Report = require("../../model/Report")
const passport = require("passport")  //验证token
const router = express.Router()

// 思想汇报列表模块
// 添加汇报接口
router.post("/reportList.add",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const report = {}
    report.userName = req.body.userName
    report.status = req.body.status
    report.reason = req.body.reason
    new Report(report).save()
    .then(report=>{res.json(report)})//成功
    .catch(err=>{console.log(err)})//失败
})

// 获取所有汇报数据接口
router.get("/reportList.do",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Report.find().then(report=>{
        if(!report){
            return res.status(404).json("没有该数据")
        }
        res.json(report)
    })
})

// 获取某个汇报数据接口
router.get("/reportList.do/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Report.findOne({_id:req.params.id}).then(report=>{
        if(!report){
         return res.status(404).json("没有该数据")
        }
        res.json(report)
    })
})

// 删除汇报接口
router.get("/reportList.delete/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Report.findOneAndDelete({_id:req.params.id}).then(report=>{
        res.status(200).json("删除成功啦！")
    })
})

// 编辑汇报接口
router.post("/reportList.edit/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const report = {}
    report.userName = req.body.userName
    report.status = req.body.status
    report.reason = req.body.reason
    Report.findOneAndUpdate({_id:req.params.id},{$set:report},{new:true})
    .then(report=>{res.json(report)})
})

module.exports = router