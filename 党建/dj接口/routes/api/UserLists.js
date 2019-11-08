const express = require("express")
const User = require("../../model/User")
const router = express.Router()

router.get('/list',(req,res)=>{
    User.find().then(userlist=>{
        res.json(userlist)
    })
})


module.exports = router