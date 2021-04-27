import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/payload',
    name: 'Payload',
    component: () => import('../views/Payload.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../views/Food.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/Member.vue')
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('../views/Shopping.vue')
  },
  {
    path: '/grocery',
    name: 'Grocery',
    component: () => import('../views/Grocery.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/Components.vue')
  },
  {
    path: '/deeppropsemit',
    name: 'DeepPropsEmit',
    component: () => import('../views/DeepPropsEmit.vue')
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: () => import('../views/ProvideInject.vue')
  },
  {
    path: '/selectcard',
    name: 'SelectCard',
    component: () => import('../views/SelectCard.vue')
  },
  {
    path: '/vmodel',
    name: 'Vmodel',
    component: () => import('../views/Vmodel.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('../views/Computed.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
