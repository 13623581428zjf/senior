<template>
  <div class="loginBj ub ub-pc ub-ac ub-ver">
      <div class="loadingImg">
        <img src="../assets/img/loading.gif">
      </div>
      <div class="loginText">{{loadingText}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'comdemo6',
    components: {},
    data() {
        return {}
    },
    filters:{},
    computed:{
       ...mapState({
           loadinPage: state => state.loading.loadinPage,
           type1:state => state.loading.type1,//可以传值来区分不同样式
           type2:state => state.loading.type2,//可以传值来区分不同样式
           loadingText:state => state.loading.loadingText, 
        }),
    },
    created() {},
    mounted(){},
    beforeDestroy() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
.loginBj{
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.1);
  .loadingImg{
      width: 35px;
      height: 35px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .loginText{
      font-size: 14px;
      color: rgb(87, 86, 86);
      margin-top: 5px;
    }
}
</style>
