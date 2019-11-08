<template>
    <div>
        <!-- 作用域插槽 ,子组件slot标签中的内容作用于子组件本身-->
        <!-- 复用子组件的slot，又使每个slot内容不一致 -->
        <slot v-for="(book) in data" :bookName="book.age"></slot>
    </div>
</template>


<script>
export default {
    props:{
        data:{
            type:Array
        }
    }
}
</script>