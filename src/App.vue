<template>
  <div id="app">
    <router-view/>
    <loading-page v-if="pageLoading"></loading-page>
  </div>
</template>

<script>
import store from '../src/store'
import loadingPage from '../../myproject/src/components/comdemo6.vue'
import { getTime } from '../src/api/demo1'
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
  created(){
    this.aa()
  },
  methods:{
    aa(){
      getTime().then(res => {
        console.log(res,'res')
        }).catch(e => {
         console.log(e)
       })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
