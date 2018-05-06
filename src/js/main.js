//import Vue from 'vue';
// import Hello from "../components/Hello.vue";
// new Vue({
//     el: "#app",
//     template: '<Hello/>',
//     components: { Hello }
// })

import Vue  from 'vue'
import router from '../router/index'  //直接导入路由配置
const app = new Vue({
    router
}).$mount('#app')
