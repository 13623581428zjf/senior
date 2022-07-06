
const demo2 = {
    state: {
        loading: false,
        alpha: 1, // 透明度：1红色.3背景，0黑色.3背景
        fullScreen: false, // 是否全屏，默认是非全屏如预设模式、灯效的loading。设置全屏是：一些对话框弹出提交时，使loading icon居中显示
        loadingText: '加载中'
    },
    mutations: {
        SET_LOADING: (state, { status, alpha, fullScreen }) => {
            state.loading = status
            state.alpha = alpha
            state.fullScreen = fullScreen
        }

    },
    actions: {
        pageLoaded({ commit }, payload) {
            console.log(payload, 'payload')
            const _payload = typeof payload === 'boolean' ? { status: payload } : payload
            commit('SET_LOADING', _payload)
        }
    }
}
export default demo2
