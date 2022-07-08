import { set } from "vue"

export default {
    name: 'demo7',
    props:{},
    components: {},
    data() {
        return {
            timer:null
        }
    },
    filters:{},
    computed:{},
    created() {
        this.time()
        setTimeout(()=>{
            this.$store.dispatch('loadingPage',{ loadinPage:false , type1 :0, type2 :0 , loadingText:'加载中...'})
        },200)
    },
    mounted(){},
    beforeDestroy() {
        //清除定时器
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    },
    methods: {
        time(){
            this.timer = setInterval(()=>{
                this.emitTime()
            },1000 * 1)
        },
        emitTime(){
            console.log('触发了定时器')
        },
        nextNode(){
            this.$router.push({
                name:'demo8'
            })
        },
    }
}
