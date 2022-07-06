import Vue from 'vue'
import Vuex from 'vuex'
import demo from './module/demo'
import demo2 from './module/demo2'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        demo,
        demo2
    }
})
export default store
