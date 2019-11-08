<template>
    <div>
        <template v-for="(item,index) in data">
            <!-- 可以是span标签渲染，可以是li标签渲染，这样写死就不太灵活，需要利用jsx -->
            <li :key="index">{{item}}</li>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Array
            }
        }
    }
</script>