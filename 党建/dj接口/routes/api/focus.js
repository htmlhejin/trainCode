const express = require('express')
const router = express.Router()
const passport = require('passport')
const Focus = require('../../model/Focus')

//添加轮播图列表
router.post('/add', passport.authenticate('jwt', { session: false }),(req, res) => {
    const list = {}
    list.pic = req.body.pic
    list.sort = req.body.sort
    list.status = req.body.status
    list.title = req.body.title
    list.url = req.body.url
    new Focus(list).save().then(focuslist => {
        res.json({ code: 1, msg: "添加成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "添加失败" })
    })
})
//获取轮播图列表所有信息
router.get('/lists',passport.authenticate('jwt', { session: false }),  (req, res) => {
    Focus.find().then(lists => {
        res.json(lists)
    }).catch(()=>{
        res.json({ code: 0, msg: "获取失败" })
    })
})
//编辑轮播图列表信息
router.post('/edit/:id',passport.authenticate('jwt', { session: false }), (req, res) => {
    const list = {}
    list.pic = req.body.pic
    list.sort = req.body.sort
    list.status = req.body.status
    list.title = req.body.title
    Focus.findOneAndUpdate({ _id: req.params.id }, { $set: list }).then(() => {
        res.json({ code: 1, msg: "编辑成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "编辑失败" })
    })
})
//删除轮播图列表
router.get('/delete/:id',passport.authenticate('jwt', { session: false }), (req, res) => {

    Focus.findOneAndDelete({ _id: req.params.id }).then(() => {
        res.status(200).json({ code: 1, msg: "删除成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "删除失败" })
    })
})

module.exports = router