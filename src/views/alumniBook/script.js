import { studentList } from '@/api/home'
import { Toast, Icon } from 'vant'
import Vue from 'vue'

import list from './data'
Vue.use(Icon)
export default {
    name: 'alumniBook',
    data() {
        return {
            bgImgAlumniBook: require('../../assets/img/bigImg/stu.png'),
            bgImgTopda: require('../../assets/img/bigImg/stu2.png'),
            header: require('@/assets/img/heads/header.png'),
            bgheader: require('@/assets/img/heads/bgheader.png'),
            topThree: [],
            studentList: [],
            dataJson: list
        }
    },
    created() {
        this.getStudentList()
    },
    mounted() {
        this.$nextTick(() => {
        })
    },
    methods: {
        getStudentList() {
            let info = this.$getsessionStorage('info')
            let openid = this.$getCookie('openid') ? this.$getCookie('openid') : ''
            // let openid = this.$getsessionStorage('openid')
            let data = {
                openid: openid,
                cid: info.data.cid
            }
            studentList(data).then(res => {
                if (res.status !== 0) {
                    Toast({
                        message: res.msg,
                        position: 'center'
                    })
                    return
                }
                let data = res.data
                data.forEach((item) => {
                    if (this.dataJson.some(_item => _item.cid == item.cid)) {
                        item.img = this.dataJson.filter(_item => _item.cid == item.cid)[0].img
                    } else {
                        item.img = this.header
                    }
                })
                data.forEach((item, index) => {
                    if (index <= 2) {
                        this.topThree.push(item)
                    } else {
                        this.studentList.push(item)
                    }
                })
                console.log(this.topThree, '前三名')
                console.log(this.studentList, '除前三名之外')
            }).catch(e => {
                console.log(e)
            })
        },
        clickDetail(cid) {
            console.log('cid', cid)
            this.$setsessionStorage('cid', cid || '')
            if (this.dataJson.some(_item => _item.cid == cid)) {
                let bgimg = this.dataJson.filter(_item => _item.cid == cid)[0].bgImg
                this.$setsessionStorage('bgimg', bgimg || '')
            } else {
                this.$setsessionStorage('bgimg', this.bgheader || '')
            }
            this.$router.push({
                name: 'detail'
            })
        }
    }
}
