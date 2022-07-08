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
    created() {
        setTimeout(()=>{
            this.$store.dispatch('loadingPage',{ loadinPage:false , type1 :0, type2 :0 , loadingText:'加载中...'})
        },200)
    },
    mounted(){},
    beforeDestroy() {},
    methods: {
        clickevent(){
            EventBus.$emit('refeshEmitEventBus', this.msg)
            EventBus.$emit('refesherouter')
        }
    }
}
