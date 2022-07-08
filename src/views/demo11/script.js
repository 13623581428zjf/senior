export default {
    name: 'demo11',
    props:{},
    components: {},
    data() {
        return {
           show:false,
           searchVal:'',
           objw:{
             dd:'',
             aa:''
           }
        }
    },
    filters:{},
    watch:{
        show: {
        handler: function(val) {
            if (val) {
                console.log('show变化了')
            }else{
                console.log('show没有变化')
            }
          },
          deep: true,
        //   immediate: true
        },
        searchVal: {
            handler(newValue) {
              if (newValue) {
                console.log('searchVal变化了')
              } else {
                console.log('searchVal没有变化')
              }
            },
            deep: true
        },
        objw:{
            handler(newValue,oldValue) {
                if (newValue) {
                  console.log(newValue,'objw变化了')
                } else {
                  console.log('objw没有变化')
                }
              },
        }
    },
    computed:{},
    created() {
        setTimeout(()=>{
            this.$store.dispatch('loadingPage',{ loadinPage:false , type1 :0, type2 :0 , loadingText:'加载中...'})
        },200)
        setTimeout(()=>{

        },5000)
    },
    mounted(){},
    beforeDestroy() {},
    methods: {}
}
