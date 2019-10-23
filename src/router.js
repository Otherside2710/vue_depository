import Vue from 'vue'
import Router from 'vue-router'
// import Hello from './components/coucouc.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hello',
      component: () => import('./components/PageA.vue')
    },
    {
      path: '/coucouc',
      name: 'coucouc',
      component: () => import('./components/coucouc.vue')
    },
    {
      path: '*',
      redirect: ''
    }
  ]
})
