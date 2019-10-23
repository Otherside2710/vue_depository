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
      path: '/Processeurs',
      name: 'Processeurs',
      component: () => import('./components/Processeurs.vue')
    },
    {
      path: '/CartesGraphiques',
      name: 'CartesGraphiques',
      component: () => import('./components/CartesGraphiques.vue')
    },
    {
      path: '/Ram',
      name: 'Ram',
      component: () => import('./components/Ram.vue')
    },
    {
      path: '/Stockage',
      name: 'Stockage',
      component: () => import('./components/Stockage.vue')
    },
    {
      path: '/Refroidissement',
      name: 'Refroidissement',
      component: () => import('./components/Refroidissement.vue')
    },
    {
      path: '/Boitier',
      name: 'Boitier',
      component: () => import('./components/Boitier.vue')
    },
    {
      path: '/Clavier&Souris',
      name: 'ClavierSouris',
      component: () => import('./components/ClavierSouris.vue')
    },
    {
      path: '*',
      redirect: ''
    }
  ]
})
