import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import AboutView from '../components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Contact.vue')
    },
    {
      path: '/about/:name',
      name: 'about',
      component: AboutView
    },
  ]
})

export default router
