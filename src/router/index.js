import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/HomeView.vue'
import Error from '../views/ErrorPage.vue'
import Repo from '../views/repo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/repo',
      name: 'repo',
      component: Repo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
