import Vue from 'vue';
import PageHome from './components/PageHome.vue';
import PageMusic from './components/PageMusic.vue';

import App from './App';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: PageHome },
    { path: '/home', component: PageHome },
    { path: '/music', component: PageMusic },
    // { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes // short for routes: routes
})


const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     render: h => h(App),
// });
