import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import UserProfile from '@/views/UserProfilePage.vue'
import JobSearchPage from '@/views/JobSearchPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import SelectUserPage from '@/components/authpage/SelectUserPage.vue'
import CompanyPage from '@/views/CompanyPage.vue'
import JobsViewComponent from '@/components/companyDashboard/JobsViewComponent.vue'
// import JobsDescriptionComponent from '@/components/companyDashboard/JobsDescriptionComponent.vue'


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
    },
    {
      path:'/dashboard/:id',
      name:'Jobsview',
      component: JobsViewComponent
    },

    // {
    //   path:'/jobdescrip/:id',
    //   name:'JobsDescription',
    //   component: JobsDescriptionComponent
    // }

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
