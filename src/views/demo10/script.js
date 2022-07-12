import { setlocalStorage , removelocalStorage , getlocalStorage , setsessionStorage , getsessionStorage , removesessionStorage , VueThrottle , VueDebounce} from '../../plugin/common'
//  解决页面  计算数值 一闪
function isNaN(val) {
    // eslint-disable-next-line no-self-compare
    if (val !== val) {
      return true
    }
    return false
  }
  function getTooltipVal(val) {
    if (val === '-' || isNaN(val)) {
      return 0
    } else {
      return val
    }
  }
export default {
    name: 'demo10',
    props:{},
    components: {},
    data() {
        return {
            num1:100,
            num2:1000
        }
    },
    filters:{},
    computed:{
        isNan(){
            return getTooltipVal((this.num2 - this.num1)/100)
        }
    },
    created() {
        setTimeout(()=>{
            this.$store.dispatch('loadingPage',{ loadinPage:false , type1 :0, type2 :0 , loadingText:'加载中...'})
        },200)
        //存local
        setlocalStorage('info',1)
        let d = getlocalStorage('info') || null
        console.log(d,'local值')
        setsessionStorage('info',2)
        let d2 = getsessionStorage('info') || null
        console.log(d2,'ssion值')
    },
    mounted(){},
    beforeDestroy() {
        removelocalStorage('info')
        removesessionStorage('info')
    },
    methods: {
        dou: VueThrottle('douFun', 1000), // VueThrottle防抖  一秒触发一次
        douFun(){
            console.log('点击了防抖')//在一定的时间内只执行第一次
        },
        jl:VueDebounce('jlFun',1000),
        jlFun(){
            console.log('点击了节流')//在一定的时间内只执行最后一次
        },
        nextNode(){
            this.$router.push({
                name:'demo11'
            })
        },
    }
}
