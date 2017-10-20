// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

import App from './App'
import router from './router'

import 'vuetify/dist/vuetify.css'

import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
