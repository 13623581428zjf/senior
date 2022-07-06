import { EventBus } from '../../components/utils/Event'
export default {
    name: 'flop',
    components: {},
    props: {
        getData: {
            type: Array,
            default: null
        },
        getObj: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            ref2: '',
            refObj: {
                uuId: ''
            },
            eventdata: [
                {
                    de: 1,
                    de1: 2
                }
            ]
        }
    },
    watch: {
        ref2(newVal) {
            if (newVal) {
                console.log(newVal, '改变了字符串')
            }
        },
        'refObj'(newVal) {
            if (newVal) {
                console.log(newVal, '改变了对象')
            }
        },
        demo2(newVal) {
            if (newVal) {
                this.initdemo2()
            }
        },
        deep: true
    },
    computed: {
        demo2() {
            return this.$store.state.demo.mydemo
        }
    },
    created() {
        console.log(this.getData, '传过来了')
        console.log(this.getObj, '传过来了对象')
    },
    mounted() {
        this.$nextTick(() => {})
    },
    methods: {
        stopTime() {
            // 触发父组件
            this.$emit('stopTime')
        },
        beginTime() {
            // 触发父组件
            this.$emit('beginTime')
        },
        em() {
            EventBus.$emit('refeshEmitEventBus', this.eventdata)
        },
        // vue-x
        initdemo2() {
            console.log(this.demo2, '二次拿到了')
        }

    }
}
