let mongoose=require("./db")
let newsSchema = mongoose.Schema({
    title:String,
    content:String 
})

module.exports = mongoose.model("News",newsSchema,)
