import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
import docComponnets from './components/docInstall'
import './style/nprogress.css';


Vue.use(VueRouter).use(docComponnets)

const router = new VueRouter({
    mode: 'hash',
    routes: routes()
});

router.afterEach(() => {
    window.scrollTo(0, 0);
    Vue.nextTick(() => window.syncPath());
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
