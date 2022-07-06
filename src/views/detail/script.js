import { getDetail, sendlike, sendcomment } from '@/api/home'
import alert from '../alert/index.vue'
import Talk from './talk.vue'
import { Toast } from 'vant'
export default {
    name: 'agenda',
    components: {
        alert,
        Talk
    },
    data() {
        return {
            bgImgdetail: require('../../assets/img/bigImg/ren.png'),
            Isshow: false,
            detail: {},
            comment: ''
        }
    },
    computed: {
        bottomBtn() {
            if (this.detail.comment_list && this.detail.comment_list.length === 0 && this.detail.like_list && this.detail.like_list.length === 0) {
                return true
            } else {
                return false
            }
        }
    },
    created() {
    },
    mounted() {
        this.$nextTick(() => {
            this.initDeatil()
        })
    },
    methods: {
        initDeatil() {
            // let openid = this.$getsessionStorage('openid')
            let openid = this.$getCookie('openid') ? this.$getCookie('openid') : ''
            let cid = this.$getsessionStorage('cid')
            let data = {
                openid: openid,
                cid: cid
            }
            getDetail(data).then(res => {
                if (res.status !== 0) {
                    Toast({
                        message: res.msg,
                        position: 'center'
                    })
                    return
                }
                this.$set(this, 'detail', res.data)
            }).catch(error => {
                console.log(error)
            })
        },
        lightUp() {
            this.Isshow = true
        },
        giveTheThumbsUp() {
            // let openid = this.$getsessionStorage('openid')
            let openid = this.$getCookie('openid') ? this.$getCookie('openid') : ''
            if (this.detail.like_list.some(item => item.openid === openid)) {
                Toast({
                    message: '您已点过赞了',
                    position: 'center'
                })
            } else {
                let cid = this.$getsessionStorage('cid')
                let params = {
                    cid: cid,
                    openid: openid
                }
                sendlike(params).then(res => {
                    if (res.status !== 0) {
                        Toast({
                            message: res.data,
                            position: 'center'
                        })
                        return
                    }
                    Toast({
                        message: '点赞成功',
                        position: 'center',
                        duration: 1000
                    })
                    this.initDeatil()
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        send() {
            // let openid = this.$getsessionStorage('openid')
            let openid = this.$getCookie('openid') ? this.$getCookie('openid') : ''
            const re = /^[^\s]+[\s]*.*$/
            if (this.comment === '') {
                Toast({
                    message: '留言不能为空！',
                    position: 'center'
                })
            }
            if (!re.test(this.comment)) {
                this.comment = ''
                Toast({
                    message: '留言不能为空！',
                    position: 'center'
                })
            } else {
                let cid = this.$getsessionStorage('cid')
                let params = {
                    cid: cid,
                    openid: openid,
                    comment: this.comment
                }
                sendcomment(params).then(res => {
                    if (res.status !== 0) {
                        Toast({
                            message: res.data,
                            position: 'center'
                        })
                        return
                    }
                    this.comment = ''
                    Toast({
                        message: '评论成功',
                        position: 'center',
                        duration: 1000
                    })
                    this.initDeatil()
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        return_home() {
            this.$router.go(-1)
        }

    }
}
