import Vue from 'vue';
import Router from 'vue-router';
import Views from '../views/Views';
import dataStore from '../DataStore';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Views.Index,
    }
  ]
});
