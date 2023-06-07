import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import UserProfile from '@/views/UserProfilePage.vue'
import JobSearchPage from '@/views/JobSearchPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import SelectUserPage from '@/components/authpage/SelectUserPage.vue'
import CompanyPage from '@/views/CompanyPage.vue'
import Error404Page from '@/views/Error404Page.vue'
import JobsList from '@/components/jobsearchpage/JobSearch.vue'
import ApplyJob from '@/components/jobsearchpage/ApplyJobPage.vue'

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
      component:UserProfile,
    },
    {
      path:'/jobsearch',
      name:'JobSearch',
      component:JobSearchPage,
      children:[
        {
          path:'',
          alias:'/',
          name:'JobList',
          component:JobsList
        },
        {
          path:'apply/:jobId',
          name:'ApplyJob',
          component:ApplyJob
        },
        
      ]
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
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: Error404Page },
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
