import 'assets/styles/reset.css';
import './style/nprogress.css';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './DemoApp'
import routes from './routes'
import Lib from '@'
import demoComponnets from './components/demoInstall'


Vue.use(VueRouter).use(Lib).use(demoComponnets)

const router = new VueRouter({
    mode: 'hash',
    routes: routes(true)
});

router.afterEach(() => {
    if (router.currentRoute.name) {
        window.scrollTo(0, 0);
    }
    if (!router.currentRoute.redirectedFrom) {
        Vue.nextTick(() => window.syncPath());
    }
});

window.vueRouter = router;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
