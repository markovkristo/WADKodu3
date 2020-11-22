import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Login from "./components/Login.vue";
import PostPage from "./components/PostPage";
import Browse from "./components/Browse";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);



const routes = [
  {path: '/' ,component: Login},
  {path: '/postPage' ,component: PostPage},
  {path: '/browse' ,component: Browse},
]

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// mingi axios vark
