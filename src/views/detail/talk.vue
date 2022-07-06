<template>
    <div class="barrages-drop">
        <vue-baberrage
            :lanesCount="2"
            :isShow="barrageIsShow"
            :barrageList="list"
            :maxWordCount="maxWordCount"
            :throttleGap="throttleGap"
            :loop="barrageLoop"
            :boxHeight="boxHeight"
            :messageHeight="messageHeight"
        >
            <template v-slot:default="slotProps">
                <span class="talk-box">
                    {{slotProps.item.msg}}
                </span>
            </template>
        </vue-baberrage>
    </div>
</template>
<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage'
import { getDetail } from '@/api/home'
import { Toast } from 'vant'
import sletMenu from '../tags/tags'
Vue.use(vueBaberrage)
export default {
    name: 'Barrages',
    data() {
        return {
            sletMenu: sletMenu,
            currentId: 0,
            comment_list: [],
            tag_list: [],
            comment_uid: '',
            msg: '测试测试测试测试测试测试测试~',
            barrageIsShow: true,
            messageHeight: 26,
            boxHeight: 150,
            barrageLoop: true,
            maxWordCount: 300,
            throttleGap: 1000,
            timer: null
        }
    },
    computed: {
    // 使用state辅助函数,使用对象方式时，名称可以不一致
        ...mapState({
            list: state => state.barrageList
        })
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    },
    mounted() {
        // this.addToList()
        this.$nextTick(() => {
            this.initDeatil()
            this.timer = setInterval(() => {
                this.initDeatil()
            }, 1000 * 3)
        })
    },
    methods: {
        getTagName(tagId) {
            let name = this.sletMenu.filter(item => item.id == tagId)
            if (name.length > 0) {
                return name[0].concent
            } else {
                return ''
            }
        },
        initDeatil() {
            let comment_uid = this.comment_uid = new Date().getTime()
            // let openid = this.$getsessionStorage('openid')
            let openid = this.$getCookie('openid') ? this.$getCookie('openid') : ''
            let cid = this.$getsessionStorage('cid')
            let data = {
                openid: openid,
                cid: cid
            }
            getDetail(data).then(res => {
                if (comment_uid !== this.comment_uid) {
                    return
                }
                if (res.status !== 0) {
                    Toast({
                        message: res.msg,
                        position: 'center'
                    })
                }
                let comments = res.data.comment_list || []

                let newDatas = []
                comments.forEach((item, index) => {
                    if (!this.comment_list.some(_item => _item.id === item.id)) {
                        newDatas.push({
                            id: item.openid + '_' + item.id,
                            msg: item.comment,
                            time: 5,
                            type: MESSAGE_TYPE.NORMAL,
                            extraWidth: 300
                        })
                    }
                })
                if (comments.length > 0) {
                    this.comment_list = this.$deepCopy(comments)
                }
                let tags = res.data.danmu_tag_list || []
                let newTags = []

                tags.forEach((item, index) => {
                    if (!this.tag_list.some(_item => _item.id === item.id)) {
                        newTags.push({
                            id: ++this.currentId,
                            msg: this.getTagName(item.tagid) + ' ' + 'X' + ' ' + item.num,
                            time: 5,
                            type: MESSAGE_TYPE.NORMAL,
                            extraWidth: 300
                        })
                    }
                })
                if (tags.length > 0) {
                    this.tag_list = this.$deepCopy(tags)
                }
                let allData = newDatas.concat(newTags)
                console.log('allData', allData)
                if (allData.length > 0) {
                    allData.forEach(item => {
                        this.$store.commit('upDateList', item)
                    })
                }

                console.log('this.barrageList', this.list)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss">
.barrages-drop {
  position: relative;
  .talk-box{
    background-color: rgba(0, 60, 116, .1);
    padding:2px 30px;
    font-size: 24px;
    font-family: FZLanTingHei-R-GBK;
    font-weight: 400;
    color: #666666;
    border-radius:23px;
  }
  .isMe{
      span{
          color:red
      }
  }
  .baberrage-stage {
    position: absolute;
    width: 100%;
    height: 150px;
    overflow: hidden;
    top: 0;
    margin-top:16px;
  }
}
</style>
