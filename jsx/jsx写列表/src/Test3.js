export default{
    props:{
        n:{
            type:Number
        },
        content:{
            typr:String
        }
    },
    render(h){
        let flag=h+this.n
        return h(flag,{},"this.content")
    }
}