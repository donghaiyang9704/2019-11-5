import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Assort from '@/components/assort/assort'
import Mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/assort',
      name: 'assort',
      component: Assort
    },
    {
      path: '/mine',
      name: 'mine',
      component:Mine
    },
  ]
})
