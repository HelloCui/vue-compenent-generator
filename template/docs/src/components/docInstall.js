import nav from "./nav.vue";
import simulator from "./simulator.vue";

const components = [nav, simulator]

const install = function(Vue, opts = {}) {
    components.forEach(c => Vue.component(c.name, c))
};

export default Object.assign(components, {
    install
})
