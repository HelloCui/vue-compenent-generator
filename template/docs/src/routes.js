import camelCase from 'camelcase'
import docConfig from '../doc.config';
import docs from '../mds';
import demos from '../demos';
import demoHome from '../demos/home';
import proIntro from '../../README.md';
import changelog from '../../CHANGELOG.md';
import './utils/iframe-router';

const registerRoute = (isDemo) => {
    const navs = docConfig.nav || [],
        route = []
    navs.forEach(nav => {
        if (nav.groups) {
            nav.groups.forEach(group => {
                group.list.forEach(page => addRoute(page));
            });
        } else {
            addRoute(nav);
        }
    });

    function addRoute(page) {
        if (isDemo && page.noExample) {
            return;
        }
        const {
            path
        } = page;
        if (path) {
            const name = camelCase(path.replace(/\//g, '-'))
            let component;
            component = isDemo ? demos[name] : docs[name];
            if (component) {
                route.push({
                    name,
                    component,
                    path: path,
                    meta: {
                        name: page.title
                    }
                })
            }
        }
    }
    if (isDemo) {
        route.push({
            name: 'demoHome',
            component: demoHome,
            path: '*',
            meta: {
                name: 'Demo'
            }
        })
    } else {
        route.push({
            name: 'intro',
            component: proIntro,
            path: '*',
            meta: {
                name: 'intro'
            }
        }, {
            name: 'changelog',
            component: changelog,
            path: '/changelog',
            meta: {
                name: 'changelog'
            }
        })
    }
    return route;
};

export default registerRoute;
