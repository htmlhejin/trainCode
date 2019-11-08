var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require("../config/keys") 
const User = require("../model/Admin")
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrkey;

module.exports = passport=>{
    passport.use(new JwtStrategy(opts,(jwt_payload, done)=> {
       User.findById(jwt_payload.id).then(user=>{
          if(user){
            return done(null,user)//存在用户，验证
          }
          return done(null,false)
       }).catch(err=>{console.log(err)})
    }));
 }
 