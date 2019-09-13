const express = require("express")
const router = express.Router()
const passport=require("passport")
// 引入model
const Profile=require("../../model/Profile")

// 接口测试成功
// router.get("/test",(req,res)=>{
//     res.send("...")
// })

// new Profile(res).save().then((profile)=>{
//     // console.log(profile)
//     // { _id: 5d6e1a97c351722d1018ecf1,
//     //     type: 'weixin',
//     //     describe: 'weixinzhuanzhang',
//     //     income: 100,
//     //     date: 2019-09-03T07:47:35.489Z,
//     //     __v: 0 }
// })

// 添加数据的接口   带上token去访问
router.post("/add",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const profileFields={}
    profileFields.type=req.body.type
    profileFields.describe=req.body.describe
    profileFields.income=req.body.income
    new Profile(profileFields).save().then(result=>{
        res.json(result)
        // {
        //     "_id": "5d6e23a76bbcb418509c06df",
        //     "type": "weixin",
        //     "describe": "weixinzhuanzhang",
        //     "income": 100,
        //     "date": "2019-09-03T08:26:15.325Z",
        //     "__v": 0
        // }
    }).catch(()=>{
        res.status(404).json("保存数据出错")
    })
})

// 编辑数据的接口
router.post("/edit/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const dir={}
    dir.type=req.body.type
    dir.describe=req.body.describe
    dir.income=req.body.income
    Profile.findOneAndUpdate({_id:req.params.id},{$set:dir},{new:true}).then(data=>{
        if(data){
            res.json(data)  //这样响应出来是查找的内容，而不是更新后的内容，想要响应更新后的内容，需要加一句代码{new:true}
        }
    }).catch(err=>{res.json(err)})
})

// 删除数据的接口
router.get("/delete/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const id=req.params.id
    Profile.findOneAndDelete({_id:id}).then(data=>{
        if(data){
            res.json(data)
        }
        res.status(404).json("删除失败")
    })
})

// 获取所有数据
router.get("/list",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Profile.find({}).then((result)=>{
        if(!result){
            res.status(404).json("没有数据")
        }
        res.json(result)
    })
})

// 获取单个数据
router.get("/list/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Profile.findOne({_id:req.params.id}).then((result)=>{
        if(!result){
            res.status(404).json("没有数据")
        }
        res.json(result)
    })
})


module.exports = router