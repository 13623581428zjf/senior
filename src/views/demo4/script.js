import { EventBus } from '../../utils/Event'
export default {
    name: 'demo4',
    props:{},
    components: {},
    data() {
        return {

        }
    },
    filters:{},
    computed:{},
    created() {},
    mounted(){
        //移除所有监听事件
        EventBus.$off('refesherouter')
        EventBus.$on('refesherouter',this.routerce)
    },
    beforeDestroy() {},
    methods: {
        nextNode(){
                this.$router.push({
                    name:'demo5'
                })
        },
        routerce(){
            console.log('触发上一路由的方法')
        }
    }
}
