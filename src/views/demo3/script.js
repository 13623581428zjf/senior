import comdemo3 from '../../components/comdemo3'
export default {
    name: 'demo3',
    props:{},
    components: {
        comdemo3
    },
    data() {
        return {
    }
    },
    filters:{},
    computed:{},
    created() {},
    mounted(){
        //获取子组件的数据 一定要等子组件页面渲染完成
        this.$nextTick(()=>{
            console.log(this.$refs.comdemo3.sonData,'在父组件拿子组件数据')
        })
    },
    beforeDestroy() {},
    methods: {
        nextNode(){
            this.$router.push({
                name:'demo4'
            })
        }
    }
}
