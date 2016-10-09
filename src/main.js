import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App';

import PageHome from './components/PageHome.vue';
import PageMusic from './components/PageMusic.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: PageHome},
  {path: '/music', component: PageMusic},
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
