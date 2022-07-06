import Vue from 'vue'
import LxButton from './button/index.js'
const components = [
    LxButton
]
const install = function(Vue) {
    components.map(component => {
        Vue.component(component.name, component)
    })
}

install(Vue)

export default {
    version: '0.0.1',
    LxButton
}
