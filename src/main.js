import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import directives from './utils/directives';

Vue.config.productionTip = false;

Object.keys(directives).forEach(name => Vue.directive(name, directives[name]));

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
