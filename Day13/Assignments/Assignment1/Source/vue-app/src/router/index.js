import { createRouter, createWebHistory } from 'vue-router'
import studentDetails from '../views/studentDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/details/:id',
      name:'studDetails',
      component:studentDetails
    }

  ]
})

export default router
