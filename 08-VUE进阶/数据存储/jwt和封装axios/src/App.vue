<template>
    <div id="app">
        <Spin size="large" fix v-if="$store.state.isshowLoading">
            加载中...
        </Spin>
        <div>
            <router-link to="/">首页</router-link>   |
            <router-link to="/login">登录</router-link>   |
            <router-link to="/profile">个人中心</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    }
</script>
