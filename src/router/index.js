import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
