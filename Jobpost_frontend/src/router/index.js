import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import TestimonialsCopy from '@/components/TestimonialsCopy.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage
    },
    {
      path: '/testimonial',
      name: 'Tetimonial',
      component: TestimonialsCopy
    }

  ]
})

export default router
