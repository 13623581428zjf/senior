export default {
    name: 'demo8',
    props:{},
    components: {},
    data() {
        return {

        }
    },
    filters:{},
    computed:{},
    created() {
        setTimeout(()=>{
            this.$store.dispatch('loadingPage',{ loadinPage:false , type1 :0, type2 :0 , loadingText:'加载中...'})
        },200)
    },
    mounted(){
        //点击body触发的动作
        document.body.addEventListener('click', () => {
            // this.$parent.Isshow = false
            //点击body要做的事情
        })
    },
    beforeDestroy() {},
    methods: {
        //swich
        listType(type) {
            switch (type) {
                case 'publicWelfare':
                    this.$router.push('./publicWelfare')
                    break
                case 'agenda':
                    this.$router.push('./agenda')
                    break
                case 'SignIn':
                    if (this.info.status) {
                        if (this.checkTime()) {
                            this.$router.push({
                                name: 'SignIn'
                            })
                            this.$setsessionStorage('isLook', false)
                        }
                    } else {
                        this.$router.push({
                            name: 'SignIn'
                        })
                    }
                    break
            }
        },
        //async,await
        async get1() {
            let d = await this.get2()
            console.log('d', d)
        },
        get2(){
            return new Promise((resolve, reject) => {
                feedback({}).then(res => {
                    resolve(res)
                }).catch(e => {
                    reject(e)
                })
            })
        },
        nextNode(){
            this.$router.push({
                name:'demo9'
            })
        },
    }
}
