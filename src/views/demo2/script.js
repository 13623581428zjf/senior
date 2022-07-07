import comdemo2 from '../../components/comdemo2'
export default {
    name: 'demo1',
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
    created() {},
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
