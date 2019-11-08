const express = require('express')
const router = express.Router()
const passport = require('passport')
const Comments = require('../../model/Comments')

//添加评议列表
router.post('/add',passport.authenticate('jwt', { session: false }),  (req, res) => {
    const list = {}
    list.title = req.body.title
    list.status = req.body.status
    list.add_time = req.body.add_time
    list.description = req.body.description
    new Comments(list).save().then(() => {
        res.status(200).json({ code: 1, msg: "添加成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "添加失败" })
    })
})
//编辑评议列表
router.post('/edit/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const list = {}
    list.title = req.body.title
    list.status = req.body.status
    list.add_time = req.body.add_time
    Comments.findOneAndUpdate({ _id: req.params.id }, { $set: list }).then(() => {
        res.status(200).json({ code: 1, msg: "编辑成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "编辑失败" })
    })
})
//获取所有的评议列表
router.get('/lists', passport.authenticate('jwt', { session: false }), (req, res) => {
    Comments.find().then((lists) => {
        res.json(lists)
    }).catch(()=>{
        res.json({ code: 0, msg: "获取失败" })
    })
})
//删除评议列表
router.get('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Comments.findOneAndDelete({ _id: req.params.id }).then(() => {
        res.status(200).json({ code: 1, msg: "删除成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "删除失败" })
    })
})
module.exports = router