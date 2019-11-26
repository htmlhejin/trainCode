<template>
    <div id="app">
        <h3>首页面</h3>
        <p>当前登录的用户名是{{$store.state.username}}</p>
    </div>
</template>

<script>
// 如果是export导出去，就是这样引进来，解构赋值；如果是export default导出去，引进来则是import xx from "xx"
import {getUser} from "../api/user"
    export default {
        async mounted(){
            let r = await getUser()
            // console.log(r.data)  // {name: "wangcai"}
        }
    }
</script>