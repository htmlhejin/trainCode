<template>
    <div>
        <!-- 问号传参，需要注意传参写法和接收的写法 -->
        <li><router-link to="/user/userdetail?id=1">用户1</router-link></li>
        <!-- 冒号传参，首先在路由中写:id，然后传参时写法/id，接收时params.id-->
        <li><router-link to="/user/userdetail/2">用户2</router-link></li>
        <li><router-link to="/user/userdetail/3">用户3</router-link></li>
    </div>
</template>

<script>
export default {
    // 此方法中不能拿到this
    
}
</script>