import Vue from 'vue';
import App from './App.vue';
import store from './store';

import directives from './utils/directives';

Vue.config.productionTip = false;

Object.keys(directives).forEach(name => Vue.directive(name, directives[name]));

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
