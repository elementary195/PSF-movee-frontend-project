import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from "./store";

require('./assets/styles.css')
// require('dotenv').config();
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, store,
  components: { App },
  template: '<App/>'
})
