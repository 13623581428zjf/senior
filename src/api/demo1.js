
import { request } from '@/utils/request'
// 获取时间戳
export function getTime() {
    return request({
        headers: {
            realm: process.env.REALM
        },
        url: `cet2021/servertime`,
        method: 'get'
    })
}

