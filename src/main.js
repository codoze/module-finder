// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'whatwg-fetch'
import Vue from 'vue'

import App from './App'
import store from './store'

import { date } from './main.filter'
Vue.filter('date', date)

// require('kube/dist/css/kube.css')
require('./style/app.scss')

/* eslint-disable no-new */
module.exports = new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
