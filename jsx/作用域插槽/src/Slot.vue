<template>
    <div>
        <!--  插槽很多时，内容会插到每一个插槽中-->  
        <!-- <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot> -->

        <!-- 匿名插槽  -->
        <slot></slot>
        <p>----------</p>

        <!-- 具名插槽 使用slot组件时只有name对应时才会插到该具名插槽中 -->
        <!-- <slot name="content"></slot> -->


        <slot name="abc"></slot>

    </div>
</template>