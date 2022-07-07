<template>
  <div>
     <div v-for="(item,index) in sonData" :key="index">
        <div>{{item}}</div>
     </div>
  </div>
</template>

<script>
import sonData from './sonData'
export default {
  name: 'comdemo3',
    components: {},
    data() {
        return {
          sonData:sonData
        }
    },
    filters:{},
    computed:{},
    created() {},
    mounted(){},
    beforeDestroy() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
</style>
