<template>
    <div>
        <!-- 放FormItem -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    // 父给子传值的一种方法
    provide(){
        return {
            form:this   //把自己提供出去，子可以接收该组件中的任何数据，如model，rules
        }
    },
    props:{
        model:{
            type:Object,
            required:true
        },
        rules:{
            type:Object
        }
    },
    methods:{
        // cb表示index中调用validate方法传过来的回调函数
            validate(cb){
            const tasks=this.$children
            .filter(item=>item.prop)
            .map(item=>item.validate())
            
            //所有的都校验通过
            Promise.all(tasks)
            .then (()=>cb(true))
            .catch(()=>cb(false))
        }
    }
}
</script>