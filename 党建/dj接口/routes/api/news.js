const express = require('express')
const router = express.Router()
const passport = require('passport')
const News = require('../../model/News')

//添加新闻列表
router.post('/add',passport.authenticate('jwt', { session: false }), (req, res) => {
    const list = {}
    list.id = req.body.id
    list.title = req.body.title
    list.author = req.body.author
    list.description = req.body.description
    list.type = req.body.type
    list.pic = req.body.pic
    list.content = req.body.content
    list.add_time = req.body.add_time
    list.keywords = req.body.keywords
    list.articlecate = req.body.articlecate
    new News(list).save().then(() => {
        res.status(200).json({ code: 1, msg: "添加成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "添加失败" })
    })
})
//编辑新闻列表
router.post('/edit/:id', passport.authenticate('jwt', { session: false }),(req, res) => {
    const list = {}
    list.id = req.body.id
    list.title = req.body.title
    list.author = req.body.author
    list.description = req.body.description
    list.type = req.body.type
    list.pic = req.body.pic
    list.content = req.body.content
    list.add_time = req.body.add_time
    list.keywords = req.body.keywords
    list.articlecate = req.body.articlecate
    News.findOneAndUpdate({ _id: req.params.id }, { $set: list }).then(() => {
        res.status(200).json({ code: 1, msg: "编辑成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "编辑失败" })
    })
})
//获取所有的新闻列表
router.get('/lists',passport.authenticate('jwt', { session: false }),  (req, res) => {
    News.find().then((lists) => {
        res.json(lists)
    }).catch(()=>{
        res.json({ code: 0, msg: "获取失败" })
    })
})
//获取某一个新闻列表
router.get('/list', passport.authenticate('jwt', { session: false }), (req, res) => {
    const id = req.query.id
    News.find({ id }).then((list) => {
        res.json(list)
    }).catch(()=>{
        res.json({ code: 0, msg: "获取失败" })
    })
})
//删除新闻列表
router.get('/delete/:id',passport.authenticate('jwt', { session: false }),  (req, res) => {

    News.findOneAndDelete({ _id: req.params.id }).then(() => {
        res.status(200).json({ code: 1, msg: "删除成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "删除失败" })
    })
})
module.exports = router