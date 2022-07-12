import axios from 'axios'
import router from '@/router/routers'

const createServer = baseURL => {
  // 创建axios实例
  const service = axios.create({
    baseURL, // api 的 base_url
    timeout: 6000 // 请求超时时间
  })
  // request拦截器
  service.interceptors.request.use(
    config => {
      if (config.method === 'post' && config.headers['Content-Type']) {
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
        const errorMsg = error.response.data.message
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

const request = createServer(process.env.BASE_API)
const authRequest = createServer(process.env.BASE_API1) // 测试服
const reserveRequest = createServer(process.env.BASE_API2) // 测试服
export { request, authRequest, reserveRequest }

