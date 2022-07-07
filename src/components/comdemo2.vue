<template>
  <div>
     <button @click="gaga">++</button>
  </div>
</template>

<script>
export default {
  name: 'comdemo2',
    components: {},
    data() {
        return {}
    },
    filters:{},
    computed:{},
    created() {},
    mounted(){},
    beforeDestroy() {},
    methods: {
      gaga(){
        //通过  $emit去触发父组件的值
        this.$emit('refreshJaja')
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
