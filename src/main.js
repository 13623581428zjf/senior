import Vue from 'vue'
import App from './App'
import router from './router/routers'
import './router/index' // permission control
import store from './store'
import './assets/css/common.scss'
import './assets/css/ub.scss'
import './assets/css/LegionFont.scss'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,// 全局挂载
  components: { App },
  template: '<App/>'
})
