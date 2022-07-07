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
    created() {},
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
