import Vue from 'vue'
import Router from 'vue-router';


import EmitFather from "./views/props,$eimt/emitFather.vue"
import EmitSon from "./views/props,$eimt/emitSon.vue"

// import Father from "./views/$parent,$children/Father.vue"
// import Son from "./views/$parent,$children/Son.vue"

// import Father from "./views/provide,inject/Father.vue"
// import Son from "./views/provide,inject/Son.vue"
// import GrandSon from "./views/provide,inject/GrandSon.vue"

// import Father from "./views/ref,refs/Father.vue"
// import Son from "./views/ref,refs/Son.vue"

import Father from "./views/$attrs,$listeners/Father.vue"
import Son from "./views/$attrs,$listeners/Son.vue"
import GrandSon from "./views/$attrs,$listeners/GrandSon.vue"

Vue.use(Router)

const router= new Router({
    mode: 'history',
    routes: [
        { path: "/emitFather", name: "emitFather", component: EmitFather },
        { path: "/emitSon", name: "emitSon", component: EmitSon },

        // { path: "/father", name: "father", component: Father },
        // { path: "/son", name: "son", component: Son },

        // { path: "/father", name: "father", component: father },
        // { path: "/son", name: "son", component: Son },
        // { path: "/grandSon", name: "grandSon", component: GrandSon },

        // { path: "/father", name: "father", component: Father },
        // { path: "/son", name: "son", component: Son },

        { path: "/father", name: "father", component: Father },
        { path: "/son", name: "son", component: Son },
        { path: "/grandSon", name: "grandSon", component: GrandSon },
    ]
})

export default router;








