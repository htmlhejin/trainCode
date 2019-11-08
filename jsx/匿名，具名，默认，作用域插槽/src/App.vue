<template>
    <div id="app">
        <!-- template标签不会被解析，使用template标签往插槽里插入数据 -->

        <!-- <Slot>App</Slot> -->
        <!-- 查到具名插槽中 -->
        <!-- <Slot> -->
            <!-- 对应具名插槽的名字才能查到具名插槽中，否则插到匿名插槽中 -->
            <!-- v-slot:插槽名 -->
            <!-- <template v-slot:content>app</template> -->

            <!-- 默认插槽,没有指定名字，数据插到匿名插槽中 -->
            <!-- <template v-slot:default>123456</template> -->

            
        <!-- </Slot> -->


        <Slot2>
            <!-- 作用域插槽,ctx表示作用域插槽的上下文,通过上下文可以访问子组件中插槽的数据 -->
            <template v-slot:default="ctx">
                <p>{{ctx.foo}}</p>
                <h1>hello</h1>
            </template>

        </Slot2>
    </div>
</template>

<script>
    // import Slot from "./Slot.vue"
    import Slot2 from "./Slot2.vue"
    export default {
        components:{
            // Slot,
            Slot2

        }
    }
</script>
