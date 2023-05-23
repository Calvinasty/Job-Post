import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import UserProfile from '@/views/UserProfilePage.vue'
import CompanyProfilePage from '@/views/CompanyProfilePage.vue'
import JobSearchPage from '@/views/JobSearchPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import SelectUserPage from '@/components/authpage/SelectUserPage.vue'
import CompanyPage from '@/views/CompanyPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage
    },
    {
      path:'/userprofile',
      name:'Userprofile',
      component:UserProfile

    },
    {
      path:'/companyprofile',
      name:'Companyprofile',
      component:CompanyProfilePage,
      

    },
    {
      path:'/jobsearch',
      name:'JobSearch',
      component:JobSearchPage
    },
    {
      path:'/auth',
      name:'AuthSelect',
      component:SelectUserPage
    },
    {
      path:'/auth/:id',
      name:'Auth',
      component:AuthPage
    },
    {
      path:'/admin/:id',
      name:'Dashboard',
      component: CompanyPage
    }
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
