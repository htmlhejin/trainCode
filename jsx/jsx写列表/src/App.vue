<template>
    <div id="app">
        <!-- <Test3 :data="['vue','react','node']"></Test3> -->
        <List :render="render" :data="['vue','react','node']"></List>
    </div>
</template>

<script>
    // import Test3 from "./Test3.vue"
    import List from "./List.vue"
    export default {
        components: {
            // Test3
            List
        },
        methods:{
            render(h,item){
                return <h1>{item}</h1>
            }
        }
    }
</script>
