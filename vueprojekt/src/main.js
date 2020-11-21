import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

/*const routes = [
  {path: '/'}
]*/
new Vue({
  render: h => h(App),
}).$mount('#app')
