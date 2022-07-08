<template>
  <div id="app">
    <router-view/>
    <loading-page v-if="pageLoading"></loading-page>
  </div>
</template>

<script>
import store from '../src/store'
import loadingPage from '../../myproject/src/components/comdemo6.vue'
export default {
  name: 'App',
  components:{
    loadingPage
  },
  computed:{},
  data(){
    return {

    }
  },
  computed:{
    pageLoading(){
      return store.state.loading.loadinPage
    }
  },
  created(){},
  methods:{

  }

}
</script>

<style lang="scss" scoped>
</style>
