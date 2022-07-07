import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/views/demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo1',
      component: demo1
    }
  ]
})
