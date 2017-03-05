import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App';
// import env from './env.js'

import PageHome from './components/pages/PageHome';
import PageMusic from './components/pages/PageMusic';
import PageAbout from './components/pages/PageAbout';

const dev = true;
const prefix = '/dev'

Vue.use(VueRouter)

const routes = [
  // {path: prefix + '*', redirect: prefix + '/home'},
  {path: prefix + '/', redirect: prefix + '/home'},
  {path: prefix + '/home', component: PageHome, name:'home'},
  {path: prefix + '/music', component: PageMusic, name:'music'},
  {path: prefix + '/about', component: PageAbout, name:'about'},
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')





