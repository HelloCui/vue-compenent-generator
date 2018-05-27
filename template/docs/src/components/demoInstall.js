import demoNav from './demoNav.vue';
import demoHeader from './demoHeader.vue';

const components = [demoNav, demoHeader]

const install = function(Vue, opts = {}) {
    components.forEach(c => Vue.component(c.name, c))
};

export default Object.assign(components, {
    install
})
