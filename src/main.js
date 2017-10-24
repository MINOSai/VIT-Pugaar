// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import { store } from './store/store'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.http.options.root= 'https://jsonplaceholder.typicode.com/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
