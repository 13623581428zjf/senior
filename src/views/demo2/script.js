import comdemo2 from '../../components/comdemo2'
export default {
    name: 'demo2',
    props:{},
    components: {
        comdemo2
    },
    data() {
        return {
            FaNum:0
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
        refreshJaja(){
            this.FaNum++
        },
        nextNode(){
            this.$router.push({
                name:'demo3'
            })
        }
    }
}
