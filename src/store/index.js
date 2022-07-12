import Vue from 'vue'
import Vuex from 'vuex'
import loading from './module/loading'
import demo1 from './module/demo1'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      loading,
      demo1
    }
})
export default store
