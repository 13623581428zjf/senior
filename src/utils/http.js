import axios from 'axios'
import router from '../router/index'
import store from '@/store'

// 全局的配置的默认值/defaults
const createServer = () => {
    // 创建axios实例
    const service = axios.create({
        // VUE_APP_URL  打包的時候用這個 ，本地调试用 VUE_APP_URL_API
        baseURL: process.env.VUE_APP_URL_API, // api 的 base_url  本地調試用這個
        timeout: 60000 // 请求超时时间
    })
    // request拦截器
    service.interceptors.request.use(
        config => {
            setTimeout(() => {
                store.dispatch('pageLoaded', { status: false, alpha: 1, fullScreen: false })
            }, 400)
            if (config.method === 'post' && config.headers['Content-Type']) {
            // eslint-disable-next-line no-self-assign
                config.headers['Content-Type'] = config.headers['Content-Type']
            } else {
                config.headers['Content-Type'] = 'application/json'
            }
            return config
        },
        error => {
        // Do something with request error
            console.log(error) // for debug
            Promise.reject(error)
            setTimeout(() => {
                store.dispatch('pageLoaded', { status: false, alpha: 1, fullScreen: false })
            }, 400)
        }
    )
    // response 拦截器
    service.interceptors.response.use(
        response => {
            const code = response.status
            if (code < 200 || code > 300) {
            // Notification.error({
            //   title: response.message
            // })
            // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject('error')
            } else {
                return response.data
            }
        },
        error => {
            let code = 0
            try {
                code = error.response.data.status
            } catch (e) {
                if (error.toString().indexOf('Error: timeout') !== -1) {
                    return Promise.reject(error)
                }
                if (error.toString().indexOf('Error: Network Error') !== -1) {
                    return Promise.reject(error)
                }
            }
            if (code === 401) {
            //
            } else if (code === 403) {
                router.push({ path: '/404' })
            } else {
                const errorMsg = error.response.data.msg
                if (errorMsg === '不允许访问') {
                    router.push({ path: '/401' })
                } else {
                // Notification.error({
                //   title: errorMsg,
                //   duration: 2500
                // })
                }
            }
            return Promise.reject(error)
        }
    )
    return service
}
const request = createServer()
export { request }

