const express = require('express')
const router = express.Router()
const passport = require('passport')
const UserList = require('../../model/UserList')
//添加用户列表
router.post('/add',passport.authenticate('jwt', { session: false }),  (req, res) => {
    UserList.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res.status(400).json('该用户名已存在')
        } else {
            const list = {}
            list.username = req.body.username
            list.idnumber = req.body.idnumber
            list.tpnumber = req.body.tpnumber
            list.score = req.body.score
            list.status = req.body.status
            list.password = req.body.password
            list.last_time = req.body.last_time
            new UserList(list).save().then(() => {
                res.json({ code: 1, msg: "添加成功" })
            }).catch(()=>{
                res.json({ code: 0, msg: "添加失败" })
            })
        }
    })
})
//编辑用户列表
router.post('/edit/:id',passport.authenticate('jwt', { session: false }),  (req, res) => {
    const list = {}
    list.username = req.body.username
    list.idnumber = req.body.idnumber
    list.tpnumber = req.body.tpnumber
    list.score = req.body.score
    list.status = req.body.status
    list.password = req.body.password
    list.last_time = req.body.last_time
    UserList.findOneAndUpdate({ _id: req.params.id }, { $set: list }).then(() => {
        res.json({ code: 1, msg: "编辑成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "编辑失败" })
    })
})
//删除用户列表
router.get('/delete/:id', (req, res) => {

    UserList.findOneAndDelete({ _id: req.params.id }).then(userlist => {
        res.status(200).json({ code: 1, msg: "删除成功" })
    }).catch(()=>{
        res.json({ code: 0, msg: "删除失败" })
    })
})
//获取所有用户列表信息
router.get('/lists', passport.authenticate('jwt', { session: false }), (req, res) => {
    UserList.find().then(lists => {
        res.json(lists)
    }).catch(()=>{
        res.json({ code: 0, msg: "获取失败" })
    })
})
//获取某个用户列表的信息    passport.authenticate('jwt', { session: false }),
router.get('/list', passport.authenticate('jwt', { session: false }), (req, res) => {
    const username = req.query.username
    UserList.find({ username }).then(list => {
        res.json(list)
    }).catch(()=>{
        res.json({ code: 0, msg: "获取失败" })
    })
})

module.exports = router