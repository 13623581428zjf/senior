export default {
    name: 'demo9',
    props:{},
    components: {},
    data() {
        return {
            itcode:'',
            isError:false
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
        //适用于状态选中
        a(){
            _data = _data.map(item => {//map遍历
                if (_data2.some(_item => _item.tagid == item.id)) {//条件
                    item.isActive = true
                } else {
                    item.isActive = false
                }
                return item
            })
        },


        //适用于选中限制
        b(){
            let selectedData = _data.filter(_item => _item.isActive)
               console.log(selectedData)
            if (selectedData.length>3) {
               console.log('最多选三个')
            }
         },

        //先条件遍历，再过滤;返回所需的数据
        c(){
            data.forEach((item) => {
                if (dataJson.some(_item => _item.cid == item.cid)) {
                    item.img = dataJson.filter(_item => _item.cid == item.cid)[0].img
                } else {
                    item.img = header
                }
            })
        },

        //查询已点赞
        d(){
            if (this.like_list.some(item => item.openid === openid)) {
                Toast({
                    message: '您已点过赞了',
                    position: 'center'
                })
            }
        },


        //非空检验
        e(){
            const reg = /[\u4E00-\u9FA5]/g
            if (this.itcode === '') {
                this.isError = true
            } else if (reg.test(this.itcode)) {
                Toast({
                    message: '不能输入中文！',
                    position: 'center'
                })
            } else {
                this.isError = false
                submitsignin({}).then(res => {
                    if (res.status !== 0) {
                        return
                    }
                    Toast({
                        message: '成功了',
                        position: 'center',
                        duration: 1000
                    })
                    this.init()
                }).catch(e => {
                    console.log(e)
                })
            }
        },

        //条件遍历找符合条件的为空字段，
        //如果找到则 findIndex 找当前为空的index
        f(){
        if (this.formData.list.some(item => item.val === '')) {
            let index = this.formData.list.findIndex(item => item.val === '')
            Notify({ type: 'warning', message: '第' + (index + 1) + '题是必选题，请勾选', duration: 1000 })
            return false
        } else if (this.formData.message === '') {
            Notify({ type: 'warning', message: '第12题是必答题，请填写', duration: 1000 })
            return false
        } else {
            return true
        }
        },

        //以‘#’号拼接数组吗每一项
        g(){
             let obj = {}
             let vals = this.formData.list.map(item => {
                 return item.val
             })
             obj.select = vals.join('#')
        },
        // 过滤所需数据
        h(){
            const freeExpireGame = this.lxgameList.filter(item => item.free_expire > 0 && item.free_expire > packageType.nowtime)
        },
        //  遍历  返回true  和 false
        g(){
            freeExpireGame.some(_item => Number(_item.game_id) === Number(item.gameId))
        },
        //先some条件循环，再filter过滤 所需item，最后插入新的数据
        i(){
            if (freeExpireGame.some(_item => Number(_item.game_id) === Number(item.gameId))) {
                const cur = freeExpireGame.filter(_item => Number(_item.game_id) === Number(item.gameId))[0]
                item.free_expire = cur.free_expire
                item.nowtime = packageType.nowtime
              } else {
                item.free_expire = 0
              }
        },
        //map 遍历
        j(){
            this.serveList = this.serveList.map((_item, _index) => {
                if (_index === 0) {
                  _item.isActive = true
                } else {
                  _item.isActive = false
                }
                return _item
              })
        },
         //分享过得不被再分享
        k(){
           if (res && res.some(_item => _item.gameConfigId === this.routingParameters.gameConfigId)) {
            this.$message({
              message: '您已经分享过了哦！',
              type: 'warning',
              duration: 2500,
              customClass: 'lg-message--warning'
            })
            return
          } else {}
        },
        //查询点赞状态
        l(){
            const hotConfigId = JSON.parse(this.$route.query.item).hotConfigId
            this.$store.dispatch('getqueryMode', this.user.userInfo.UserID).then((res) => {
                if (res.praiseIds && res.praiseIds.some(_item => _item === hotConfigId)) {
                   this.zanShow = 2
                  } else {
                    this.zanShow = 1
                  }
            })
        },
        m(){

        },
        n(){

        },
        nextNode(){
            this.$router.push({
                name:'demo10'
            })
        },
    }
}
