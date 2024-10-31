import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Resume from '../views/resume.vue'
import Skills from '../views/skills.vue'
import Aboutme from '../views/aboutme.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme
    }
  ]
})

export default router