import datalist from './data.js'
import comdemo1 from '../../components/comdemo1'
export default {
    name: 'demo1',
    components: {
        comdemo1
    },
    data() {
        return {
            deData:datalist,
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
        nextNode(){
            this.$router.push({
                name:'demo2'
            })
        }
    }
}
