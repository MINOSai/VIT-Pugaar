// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from './store/store'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.css'
import axios from "axios";
// import './stylus/main.styl'

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueResource );
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
