import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import dataStore from '../DataStore';

Vue.use(Router)

console.log(dataStore.sections.passwordSecurity.activities[0].component);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appa',
      component: dataStore.sections.passwordSecurity.activities[0].component
    }
  ]
})
