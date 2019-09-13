// 配置passport
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const mongoose = require("mongoose")  //引入mongoose,用来操作数据库，
const User = mongoose.model("users") //引入model，用来findOne
const keys = require("./keys")   

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrkey;

//导出的是一个函数， passport是形参
module.exports = passport => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        // console.log(jwt_payload) //jwt_payload中保存了用户信息
        // console.log(done)   //[Function: verified]
        // 根据id查找某个用户的信息
        User.findById (jwt_payload.id).then((user)=>{
            if(user){
                return done(null,user)  //查询的结果挂在了req上
            }else{
                return done(null,false)
            }
        }).catch(err=>{console.log(err)})
    }));
}

// console.log(jwt_payload)
// { id: '5d6d054cd490ec0d18631727',
//   email: '123456@qq.com',
//   name: 'wangcai',
//   iat: 1567493486,
//   exp: 1567497086 }