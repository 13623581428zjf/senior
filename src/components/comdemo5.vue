<template>
  <div>
  </div>
</template>

<script>
import { EventBus } from '../utils/Event'
export default {
  name: 'comdemo5',
    components: {},
    data() {
        return {}
    },
    filters:{},
    computed:{},
    created() {},
    mounted(){
       this.$nextTick(()=>{
           //移除所有监听事件
            EventBus.$off('refeshEmitEventBus')
            EventBus.$on('refeshEmitEventBus',this.event1)
      })
    },
    beforeDestroy() {},
    methods: {
      event1(val){
        console.log('触发了eventBus',val)
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
