<template>
    <div>
        <!-- 向子组件传递了三个数据 -->
        <Son :name="name" :age="age" :height="height"></Son>  
    </div>
</template>

<script>
import Son from "./Son"
export default {
    name:'father',
    components:{Son},
    data(){
        return {
            name:"wangcai",
            age:19,
            height:160
        }
    }
}
</script>