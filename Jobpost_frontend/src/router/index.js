import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import UserProfile from '@/views/UserProfilePage.vue'
import JobSearchPage from '@/views/JobSearchPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import SelectUserPage from '@/components/authpage/SelectUserPage.vue'
import CompanyPage from '@/views/CompanyPage.vue'
import Error404Page from '@/views/Error404Page.vue'
import JobsList from '@/components/jobsearchpage/JobSearch.vue'
import ApplyJob from '@/components/jobsearchpage/applyjobpage/ApplyJobPage.vue'
import LogoutComponent from '@/components/LogoutComponent.vue'

// route guard for restricting users to private pages
const routeGuard = (to, from, next) => {
  const isAuthenticated = authenticated(to.name)
  isAuthenticated ? next() : next('/auth/login')
}
// route guard to restrict auth page access when user is already authenticated
const guardAuth = (to, from, next) => {
  console.log(to);
  const companyToken = localStorage.getItem('companyToken')
  const userToken = localStorage.getItem('userToken')
  if(to.matched.path == '/auth/'){
    console.log(to);
    if(companyToken){next('/admin/analyticsView')}
    else if(userToken) {next('/userprofile')}
    else { next() }
  }else{
    console.log('no', to);
    next()
  } 
}
// check if user or company is authenticated
const authenticated = (to) => {
  let localState;
  if(to == 'Userprofile')
    localState = localStorage.getItem('userToken')
  if(to == 'Dashboard')
    localState = localStorage.getItem('companyToken')

  return localState
}
// routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage,
      meta: {title: 'Home'}
    },
    {
      path:'/userprofile',
      name:'Userprofile',
      component:UserProfile,
      beforeEnter: routeGuard,
      meta: {title: 'Profile'}
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
        
      ],
      meta: {title: 'Jobs'}
    },
    {
      path:'/auth',
      name:'AuthSelect',
      component:SelectUserPage,
      beforeEnter: guardAuth,
      meta: {title: 'Authenticate'}
    },
    {
      path:'/auth/:id',
      name:'Auth',
      component:AuthPage,
      meta: {title: 'Authenticate'}
    },
    {
      path:'/admin/:id',
      name:'Dashboard',
      component: CompanyPage,
      beforeEnter: routeGuard,
      meta: {title: 'Dashboard'}
    },
    {
      path:'/logout',
      name:'logout',
      component: LogoutComponent
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: Error404Page, meta: {title: 'Not Found'} },
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
