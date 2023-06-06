import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product-list',
      component: () => import('../components/ProductList.vue')
    },
    {
      path: '/login',
      name: 'login-view',
      component: () => import('../components/LoginCreate.vue')
    }
  ]
})

export default router
