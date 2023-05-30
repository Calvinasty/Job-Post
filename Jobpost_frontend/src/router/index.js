import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import UserProfile from '@/views/UserProfilePage.vue'
import JobSearchPage from '@/views/JobSearchPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import SelectUserPage from '@/components/authpage/SelectUserPage.vue'
import CompanyPage from '@/views/CompanyPage.vue'
import ModalComponent from '@/components/profilepage/EditPopups.vue'
import UploadComponent from '@/components/profilepage/UploadComponent.vue'
import PersonalInformationComponent from '@/components/profilepage/PersonalInformationComponent.vue'
import EducationHistoryComponent from '@/components/profilepage/EducationHistoryComponent.vue'
import WorkExperienceComponent from '@/components/profilepage/WorkExperienceComponent.vue'
import SkillInterestComponent from '@/components/profilepage/SkillInterestComponent.vue'
import JobViewEdit from '@/components/companyDashboard/dashboardPages/JobViewEdit.vue'


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
      children:[
        {
          path:'/userprofile/modal', //netted route. put modal on edit button
          name:'modal',
          component:ModalComponent,
          children:[
            {
              path:'/userprofile/modal/uploadpicture',
              component:UploadComponent,
            },
            {
              path:'/userprofile/modal/personalinfo',
              component:PersonalInformationComponent,
            },
            {
              path:'/userprofile/modal/education',
              component:EducationHistoryComponent,
            },
            {
              path:'/userprofile/modal/experience',
              component:WorkExperienceComponent,
            },
            {
              path:'/userprofile/modal/skills',
              component:SkillInterestComponent,
            }

          ]
        }

      ]
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
      path:'/jobviewedit/:id',
      name:'Jobviewedit',
      component: JobViewEdit
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
