import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import user from '../components/user.vue'
import details from '../components/details.vue'
import post from '../components/post.vue'
import users from '../components/users-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path:'/users',
      name:'users',
      component:users,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user,
      children:[
        {
          path: 'details',
          name:'details',
          component: details
        },
        {
          path: 'post',
          name:'post',
          component: post
        }
      ]
    },

  ]
})

export default router
