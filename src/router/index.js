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
      name: 'user-login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/user',
      name: 'user-page',
      component: () => import('../views/user/User.vue'),
      meta: {
        login: true
      },
      children: [
        {
          path: "",
          name: "user-graphic",
          component: () => import('../views/user/UserGraphic.vue')
        },
        {
          path: "",
          name: "random-status",
          component: () => import('../views/user/RandomStatus.vue')
        }
      ]
    },
    
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!window.localStorage.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
