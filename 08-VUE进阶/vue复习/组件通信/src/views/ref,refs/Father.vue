<template>
    <div>
        <Son ref="abc"></Son>
        <p ref="wangcai">p标签</p>   
    </div>

</template>

<script>
import Son from "./Son"
export default {
    name:'father',
    components:{Son},
    mounted(){
        console.log(this.$refs.wangcai)   // <p ref="wangcai">p标签</p>
        const a=this.$refs.abc
        // console.log(a.msg)   // hello
        // console.log(a.sayHello)   // ƒ sayHello() {console.log("world");}
         a.sayHello()   // world
    }
}
</script>