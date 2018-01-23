import confirmModal from './components/confirm';

const wcsLib = {
    confirmModal
};

const install = function (Vue, opts = {}) {

    Object.keys(wcsLib).forEach((key) => {
        Vue.component(key, wcsLib[key]);
    });

    //TODO 常用组件的挂在vue原型上
    // Vue.prototype.$loading = loading;
};

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// }

module.exports = Object.assign(wcsLib, {install});   // eslint-disable-line no-undef
