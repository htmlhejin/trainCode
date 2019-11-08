<template>
    <div>
        <!-- 作用域插槽 ,子组件slot标签中的内容作用于子组件本身-->
        <slot :foo="foo"></slot>
    </div>
</template>


<script>
export default {
    data(){
        return {
            foo:'bar'
        }
    }
}
</script>