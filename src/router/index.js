import { createRouter, createWebHistory } from 'vue-router'
//import Main from '../layouts/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('../views/HomeView.vue') },
        { path: '/about', component: () => import('../views/AboutView.vue') },
      ]
    },
  ]
})

export default router
