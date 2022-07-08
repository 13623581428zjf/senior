<template>
  <div>
    <div class="son_container w100 ub ub-ac">
      <div v-for="(item,index) in this.deData" :key="index">
        <div>{{item.icc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../src/store'
export default {
  name: 'comdemo1',
   props:{
    deData:{
      type:Array,
      default:null
    }
   },
    components: {},
    data() {
        return {}
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
.son_container{
  div{
    margin-right: 30px;
  }
}
</style>
