<template>
    <div id="app">
        <router-link to="/home">首页</router-link>
        <br>
        <router-link to="/about">关于</router-link>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
       name:'app',
       mounted(){
        //    console.log(this.$router)
        //    VueRouter {__ob__: Observer}
            // history: HistoryRoute
            // mode: "hash"
            // routes: Array(2)
            // routesMap: (...)
        //    console.log(this.$route)  // this._root._router.history
        //    {current: HistoryRoute}
            // current: HistoryRoute
            // current: "/home"
            // __ob__: Observer {value: HistoryRoute, dep: Dep, vmCount: 0}
            // get current: ƒ reactiveGetter()
            // set current: ƒ reactiveSetter(newVal)
            // __proto__: Object
            // __proto__: Object
            //  console.log(this.$route)
       }
    }
</script>
