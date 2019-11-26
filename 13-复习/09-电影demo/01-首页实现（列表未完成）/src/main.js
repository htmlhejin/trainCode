import 'amfe-flexible'
import "./cube-ui"
import Vue from "vue"
import router from "./router"
import store from "./store"
import App from "./App"


new Vue({
    router,
    store,
    render:h=>h(App)
}).$mount("#app")
// 没有el模板,通过vm.$mount(#app)渲染<div id="app"></div>