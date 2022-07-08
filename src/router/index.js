import router from './routers'
import store from '../store'
import { isMobile } from '../../src/plugin/common'
//一般用于进入页面的限制，比如，没有登录就不能某些页面；就是路由拦截
router.beforeEach((to, from, next) => {
  console.log('路由拦截to--- ', to)
  console.log(isMobile(),'是否手机')
  store.dispatch('loadingPage',{ loadinPage:true , type1 :0, type2 :0 , loadingText:'加载中...'})
  next()
})
//进入某个路由之后触发的钩子函数
router.afterEach((to, from) => {
  try {
    // 滚动到顶部
    document.body.scrollIntoView()
  } catch (e) {
    console.log(e)
  }
})
