
import { studentList } from '@/api/home'
const demo = {
    state: {
        mydemo: [] // demo
    },
    mutations: {
        SET_MYDEMO: (state, mydemoData) => {
            state.mydemo = mydemoData
        }
    },
    actions: {
    // 获取demo
        getmydemo({ commit }, obj) {
            return new Promise((resolve, reject) => {
                studentList(obj).then(res => {
                    commit('SET_MYDEMO', res)
                    resolve(res)
                }).catch(err => {
                    console.log(err)
                    reject(err)
                })
            })
        }
    }
}
export default demo
