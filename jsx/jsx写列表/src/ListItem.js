export default{
    props:{
        render:Function,
        item:String
    },
    render(h){
        // this.render调用的是App.vue中的render，并传递了两个实参
        return this.render(h,this.item)
    }
}