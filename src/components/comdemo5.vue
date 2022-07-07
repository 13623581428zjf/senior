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
