import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/views/HomePage';
import FindPage from '@/views/FindPage';
import NotFoundPage from '@/views/NotFoundPage';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/find',
    name: 'Find',
    component: FindPage,
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
