
import { request } from '@/utils/http'
import Vue from 'vue'
// 获取时间戳
export function getTime() {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/servertime`,
        method: 'get'
    })
}
// 检查是否签到
export function signin(data) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/check-signin`,
        method: 'get',
        params: data
    })
}
// 提交签到
export function submitsignin(openid, itcode) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/add-signin` + '?openid=' + openid + '&itcode=' + itcode,
        method: 'post'
    })
}
// 同学录首页列表
export function studentList(data) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/student-list`,
        method: 'get',
        params: data
    })
}
// 首页 详情
export function getDetail(data) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/profile`,
        method: 'get',
        params: data
    })
}
// 检查是否提交反馈
export function feedback(data) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/check-feedback`,
        method: 'get',
        params: data
    })
}
// 提交标签
export function submitTag(data) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/sendtagk`,
        method: 'get',
        params: data
    })
}
// 提交点赞
export function sendlike(data) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/sendlike`,
        method: 'get',
        params: data
    })
}

// 提交评论
export function sendcomment(data) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/sendcomment`,
        method: 'get',
        params: data
    })
}
// 提交反馈
export function addFeedback(cid, select, question) {
    return request({
        headers: {
            realm: process.env.VUE_APP_REALM
        },
        url: `cet2021/add-feedback` + '?' + 'cid=' + cid + '&' + 'select=' + escape(select) + '&' + 'question=' + question,
        method: 'post'
    })
}

