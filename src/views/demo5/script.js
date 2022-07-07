import { EventBus } from '../../utils/Event'
import somdemo5 from '../../components/comdemo5'
export default {
    name: 'demo5',
    props:{},
    components: {
        somdemo5
    },
    data() {
        return {
            msg:'11'
        }
    },
    filters:{},
    computed:{},
    created() {},
    mounted(){},
    beforeDestroy() {},
    methods: {
        clickevent(){
            EventBus.$emit('refeshEmitEventBus', this.msg)
            EventBus.$emit('refesherouter')
        }
    }
}
