// This file is auto generated by build/bin/build-entry.js
import progress from 'nprogress';

function asyncWrapper(component) {
  return function(r) {
    progress.start();
    component(r).then(() => {
      progress.done();
    }).catch(() => {
      progress.done();
    });
  };
}

function componentWrapper(component, name) {
  component = component.default;
  component.name = 'demo-' + name;
  return component;
}

export default {
  'home': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./home'), 'home')), 'home'))
};
