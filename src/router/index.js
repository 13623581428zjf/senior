import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/views/demo1'
import demo2 from '@/views/demo2'
import demo3 from '@/views/demo3'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    }
  ]
})
