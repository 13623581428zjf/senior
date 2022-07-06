import Vue from 'vue'
import { RadioGroup, Radio, Field, Button, Notify, Toast } from 'vant'
import { addFeedback, feedback } from '@/api/home'
import { VueThrottle } from '../../assets/js/public_fun'
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Field)
Vue.use(Button)
Vue.use(Notify)
Vue.use(Toast)
export default {
    name: 'sore',
    data() {
        return {
            formData: {
                list: [
                    {
                        val: '',
                        name: '1.您对本次CET管理沙龙的整体满意度'
                    }, {
                        val: '',
                        name: '2.您对低碳公益活动的满意度'
                    }, {
                        val: '',
                        name: '3.您对“STAMP纲要分享”的总体满意度'
                    }, {
                        val: '',
                        name: '4.您对“纲要整体讨论”的总体满意度'
                    }, {
                        val: '',
                        name: '5.您对“纲要专题研讨1-ESG专题分享及研讨”的总体满意度'
                    }, {
                        val: '',
                        name: '6.您对“纲要专题研讨2-两大转型-分享：B/b/C客户洞察分享”的总体满意度'
                    }, {
                        val: '',
                        name: '7.您对“纲要专题研讨2-两大转型-分享：北极星指标方法论分享”的总体满意度'
                    }, {
                        val: '',
                        name: '8.您对“纲要专题研讨2-两大转型-专题研讨”的总体满意度'
                    }, {
                        val: '',
                        name: '9.您对Team Building的满意度'
                    }, {
                        val: '',
                        name: '10.您对晚宴的满意度'
                    },
                    {
                        val: '',
                        name: '11.您对会务支持的满意度'
                    }
                ],
                message: ''
            },
            success: '提交',
            suc_pon: '-1',
            from: {}
        }
    },
    created() {
        this.getfeedback()
    },
    computed: {
    },
    methods: {
        submit: VueThrottle('submitFun', 1000), // VueThrottle防抖  一秒触发一次
        submitFun() {
            if (this.checkFrom()) {
                let obj = this.commitFrom()
                addFeedback(obj.cid, obj.select, obj.question).then(res => {
                    if (res.status === 1) {
                        Toast({
                            message: res.data,
                            position: 'center'
                        })
                        return
                    }
                    Toast({
                        message: '提交成功',
                        position: 'center'
                    })
                    setTimeout(() => {
                        this.suc_pon = 1 // 已提交=1，未提交=0
                    }, 1000)
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        checkFrom() {
            if (this.formData.list.some(item => item.val === '')) {
                let index = this.formData.list.findIndex(item => item.val === '')
                Notify({ type: 'warning', message: '第' + (index + 1) + '题是必选题，请勾选', duration: 1000 })
                return false
            } else if (this.formData.message === '') {
                Notify({ type: 'warning', message: '第12题是必答题，请填写', duration: 1000 })
                return false
            } else {
                return true
            }
        },
        commitFrom() {
            let info = this.$getsessionStorage('info')
            let obj = {}
            obj.cid = info.data.cid
            let vals = this.formData.list.map(item => {
                return item.val
            })
            obj.select = vals.join('#')
            obj.question = this.formData.message
            console.log('obj', obj)
            return obj
        },
        return_home() {
            this.$router.go(-1)
        },
        // 已提交=1，未提交=0
        async getfeedback() {
            this.suc_pon = await this.get_feedback_status()
            console.log('this.suc_pon是否提交反馈，已提交=1，未提交=0', this.suc_pon)
        },
        get_feedback_status() {
            let info = this.$getsessionStorage('info')
            return new Promise((resolve, reject) => {
                feedback({ cid: info.data.cid }).then(res => {
                    // res.status = 1
                    resolve(res.status)
                }).catch(e => {
                    reject(e)
                })
            })
        }
    }
}
