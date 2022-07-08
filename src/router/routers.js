import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/views/demo1'
import demo2 from '@/views/demo2'
import demo3 from '@/views/demo3'
import demo4 from '@/views/demo4'
import demo5 from '@/views/demo5'
import demo7 from '@/views/demo7'
import demo8 from '@/views/demo8'
import demo9 from '@/views/demo9'





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
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: demo8
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: demo9
    }
  ]
})
