
const loading = {
    state: {
        loadinPage: false,
        type1:0,//可以传值来区分不同样式
        type2:0,//可以传值来区分不同样式
        loadingText:'加载中...'
    },
    mutations: {
        SET_lOADING: (state, obj) => {
            state.loadinPage = obj.loadinPage
            state.type1 = obj.type1
            state.type2 = obj.type2
            state.loadingText = obj.loadingText
        }
    },
    actions: {
      loadingPage( {commit} , obj ){
          console.log(obj,'传给store的数据')
          commit( 'SET_lOADING', obj )
      }
    }
}
export default loading
