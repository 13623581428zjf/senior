import Vue from 'vue'
import { Toast } from 'vant'
import flop from '../../components/flop'
import { EventBus } from '../../components/utils/Event'
import list from '../alumniBook/data'

Vue.use(Toast)
export default {
    name: 'Home',
    components: {
        flop
    },
    data() {
        return {
            getData: [],
            getobj: {
                name: '',
                out: {}
            },
            timer: null,
            num: 1,
            dataJson: list
        }
    },
    created() {
        this.time()
        this.init()
        this.getStore()
        // 测试  全局loading
        // this.$store.state.demo2.loading = true   第一种写法
        // this.$store.dispatch('pageLoaded', { status: true, alpha: 0, fullScreen: false }) // 第二种写法
        // setTimeout(() => {
        // this.$store.state.demo2.loading = false  第一种写法
        // this.$store.dispatch('pageLoaded', { status: false, alpha: 0, fullScreen: false }) // 第二种写法
        // }, 1000)
    },
    mounted() {
        this.$nextTick(() => {
            console.log(this.$refs.flop, 'VueComponent')
            EventBus.$on('refeshEmitEventBus', this.emitEventBus)
        })
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    },
    methods: {
        init() {
            let arr = [
                {
                    type: 'isTrue',
                    id: 1,
                    gorIn: 'soso'

                },
                {
                    type: 'isFalse',
                    id: 2,
                    gorIn: 'soso'

                }
            ]
            this.getData = arr
            let obj = {
                name: '111',
                out: {
                    out1: 'out1',
                    out2: 'out2'
                }
            }
            this.$set(this, 'getobj', obj)
        },
        time() {
            this.timer = setInterval(() => {
                this.open()
            }, 1000 * 1)
        },
        open() {
            this.num++
            this.$refs.flop.ref2 = this.num
            this.$refs.flop.refObj = {
                uuId: this.num
            }
        },
        stopTime() {
            console.log('点击了停止')
            if (this.timer) {
                clearInterval(this.timer)
                this.timer = null
            }
        },
        beginTime() {
            console.log('点击了开始')
            this.time()
        },
        emitEventBus(val) {
            console.log('触发了EventBus')
            console.log(val, 'Event接收val')
        },
        // 获取vue-x
        getStore() {
            let obj = {
                openid: '22222',
                cid: '1'
            }
            this.$store.dispatch('getmydemo', obj).then((res) => {
                this.$store.dispatch('pageLoaded', { status: true, alpha: 1, fullScreen: false })
                console.log(res, '拿到demo数据,第一次')
                res.data.forEach((item) => {
                    if (this.dataJson.some(_item => _item.cid == item.cid)) {
                        item.img = this.dataJson.filter(_item => _item.cid == item.cid)[0].img
                    } else {
                        item.img = ''
                    }
                })
            })
        },
        initdemo2() {
            console.log(this.demo2, '二次拿到了')
        }
    }
}
