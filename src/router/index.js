import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            meta: { title: '2021 CET' },
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            meta: { title: '2021 CET' },
            component: () => import('@/views/home/index')
        },
        {
            path: '/publicWelfare',
            name: 'publicWelfare',
            meta: { title: 'ESG 公益环保' },
            component: () => import('@/views/publicWelfare/index')
        },
        {
            path: '/agenda',
            name: 'agenda',
            meta: { title: '议程' },
            component: () => import('@/views/agenda/index')
        },
        {
            path: '/SignIn',
            name: 'SignIn',
            meta: { title: '签到' },
            component: () => import('@/views/SignIn/index')
        },
        {
            path: '/alumniBook',
            name: 'alumniBook',
            meta: { title: '同学录' },
            component: () => import('@/views/alumniBook/index')
        },
        {
            path: '/detail',
            name: 'detail',
            meta: { title: '主页' },
            component: () => import('@/views/detail/index')
        },
        {
            path: '/sore',
            name: 'sore',
            meta: { title: '反馈' },
            component: () => import('@/views/sore/index')
        }
    ]
})
export default router
