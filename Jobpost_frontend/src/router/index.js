import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import UserProfile from '@/views/UserProfile.vue'
import JobSearchPage from '@/views/JobSearchPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage
    },
    {
      path:'/',
      name:'Userprofile',
      component:UserProfile

    },
    {
      path:'/jobsearch',
      name:'JobSearch',
      component:JobSearchPage
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }else{
      return{
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router
