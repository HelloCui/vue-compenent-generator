// 引入样式
import indexLess from './assets/styles/index.less'

const
    // 一般组件
    components = {},
    // 单例组件，通过方法直接调用，如：toast
    methods = {}

const install = function(Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
    Object.keys(methods).forEach((key) => {
        Vue.prototype['$' + key] = methods[key]
    })
};

export default Object.assign(components, {
    install
})
