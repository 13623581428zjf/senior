
import { submitTag } from '@/api/home'
import { Toast } from 'vant'
import sletMenu from '../tags/tags'
export default {
    name: 'agenda',
    props: {
        ids: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            isTag: false,
            sletMenu: sletMenu
        }
    },
    created() {},
    mounted() {
        document.body.addEventListener('click', () => {
            this.$parent.Isshow = false
        })
        this.$nextTick(() => {
            if (this.ids) {
                this.sletMenu = this.sletMenu.map(item => {
                    if (this.ids.some(_item => _item.tagid == item.id)) {
                        this.isTag = true
                        item.isActive = true
                    } else {
                        item.isActive = false
                    }
                    return item
                })
            }
        })
    },
    methods: {
        selectTag(item) {
            if (this.isTag) {
                return
            }
            if (!item.isActive) {
                let selectedData = this.sletMenu.filter(_item => _item.isActive)
                if (selectedData.length === 3) {
                    Toast({
                        message: '最多只能选择3个标签',
                        position: 'center',
                        duration: 1000
                    })
                    return
                }
            }
            item.isActive = !item.isActive
        },
        seccess() {
            let cid = this.$getsessionStorage('cid')
            // let openid = this.$getsessionStorage('openid')
            let openid = this.$getCookie('openid') ? this.$getCookie('openid') : ''
            let selectedData = this.sletMenu.filter(_item => _item.isActive)
            let tagids = []
            if (selectedData.length > 0) {
                tagids = selectedData.map(item => {
                    return item.id
                })
            }
            if (tagids.length === 0) {
                Toast({
                    message: '请选择标签',
                    position: 'center',
                    duration: 1000
                })
                return
            }
            let params = {
                cid: cid,
                openid: openid,
                tagid: tagids.join('#')
            }
            submitTag(params).then(res => {
                if (res.status !== 0) {
                    Toast({
                        message: res.data,
                        position: 'center'
                    })
                    return
                }
                this.$parent.Isshow = false
                Toast({
                    message: '点亮成功',
                    position: 'center',
                    duration: 1000
                })
                this.$parent.initDeatil()
            }).catch(e => {
                console.log(e)
            })
        }

    }
}
