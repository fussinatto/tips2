import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import 'constants'
import App from './App.vue'
import routes from './routes/index.js'
// import contentful from './utils/contentful.js'

Vue.use(VueRouter)
Vue.use(Vuex)
// console.log(contentful);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
