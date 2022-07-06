import Vue from 'vue'
import { Form, Field, Toast } from 'vant'
import { submitsignin } from '@/api/home'
Vue.use(Form)
Vue.use(Field)
export default {
    name: 'SignIn',
    data() {
        return {
            bgImgSignln: require('../../assets/img/bigImg/qd.png'),
            itcode: '',
            isError: false,
            isLook: '',
            seatInfo: {}
        }
    },
    created() {},
    mounted() {
        this.isLook = this.$getsessionStorage('isLook')
        if (this.isLook === true) {
            this.$set(this, 'seatInfo', this.$getsessionStorage('seatInfo'))
        }
    },
    methods: {
        goQreid() {
            const reg = /[\u4E00-\u9FA5]/g
            if (this.itcode === '') {
                this.isError = true
            } else if (reg.test(this.itcode)) {
                Toast({
                    message: '不能输入中文！',
                    position: 'center'
                })
            } else {
                this.isError = false
                // let openid = this.$getsessionStorage('openid')
                let openid = this.$getCookie('openid') ? this.$getCookie('openid') : ''
                let itcode = this.itcode
                submitsignin(openid, itcode).then(res => {
                    if (res.status !== 0) {
                        Toast({
                            message: res.data,
                            position: 'center'
                        })
                        return
                    }
                    Toast({
                        message: '签到成功',
                        position: 'center',
                        duration: 1000
                    })
                    let info = this.$getsessionStorage('info')
                    info.data.cid = res.data.cid
                    this.$setsessionStorage('info', info)
                    this.$setsessionStorage('seatInfo', res.data)
                    setTimeout(() => {
                        this.isLook = true
                        this.$setsessionStorage('isLook', true)
                        this.seatInfo = {}
                        this.$set(this, 'seatInfo', res.data)
                    }, 1000)
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        returnHome() {
            this.$router.go(-1)
        }
    }
}
