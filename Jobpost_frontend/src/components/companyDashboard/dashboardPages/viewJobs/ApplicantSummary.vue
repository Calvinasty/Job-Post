<template>
    
        <div class="container">
            <ApplicantSummaryHeader class="head"/>
            <main>
                <ApplicantSummaryInfos  :users="users" :addresses="addresses" class="side" />
                <div class="details">
                    <ApplicantSumWorkExperience :experience="experience" class="card"/>
                    <ApplicantSummarySkills :skills="skills"  class="card"/>
                    <ApplicantSumEducation :educations="educations" class="card"/> 
                </div>
                </main>
        </div>
</template>

<script>
import ApplicantSummaryInfos from './applicants_summary/ApplicantSummaryInfos.vue'
import ApplicantSumWorkExperience from './applicants_summary/ApplicantSumWorkExperience.vue'
import ApplicantSummarySkills from './applicants_summary/ApplicantSummarySkills.vue'
import ApplicantSumEducation from './applicants_summary/ApplicantSumEducation.vue'
import ApplicantSummaryHeader from './applicants_summary/ApplicantSummaryHeader.vue'
import axios from 'axios'
export default {
    components:{
        ApplicantSummaryHeader,
        ApplicantSummaryInfos,
        ApplicantSumWorkExperience,
        ApplicantSummarySkills,
        ApplicantSumEducation
    },
    data(){
        return{

            users: {
                image: '/images/userprofile.svg',
                name: 'Daniella McDan',
            },
            addresses: {
                address: 'Coral Avenue, Hse 3, Tantra Hills, Accra-Ghana. GHA-393-133',
                gender: 'Female',
                age: '27',
                email: 'danmcdan@gmail.com',
                linkedin: 'linkedin.com/daniellamcdan',
                number: '+233254775545'
            },
            experience: 
            [
                {role:'UI/UX Designer', location: 'Zenith Bank | 2017-2022' },
                {role:'UI/UX Designer', location: 'Zenith Bank | 2017-2022' },
                {role:'UI/UX Designer', location: 'Zenith Bank | 2017-2022' }
            ],

            skills:
            [
                {name: 'SQL', icon: 'task_alt'},
                {name: 'SQL', icon: 'task_alt'},
                {name: 'SQL', icon: 'task_alt'},
                {name: 'SQL', icon: 'task_alt'},
                {name: 'JavaScript', icon: 'task_alt'},
                {name: 'JavaScript', icon: 'task_alt'},
                {name: 'JavaScript', icon: 'task_alt'},
                {name: 'JavaScript', icon: 'task_alt'}
            ],

            educations:
            [
                {name: 'University of Ghana, Legon', type: 'BSc. Administration | 2014-2018'},
                {name: 'University of Ghana, Legon', type: 'BSc. Administration | 2014-2018'},
                {name: 'University of Ghana, Legon', type: 'BSc. Administration | 2014-2018'},
                {name: 'University of Ghana, Legon', type: 'BSc. Administration | 2014-2018'}
            ]
        }
    },
    mounted(){
        this.getUser()
    },
    methods:{
        getUser(){
            // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3YWMzOTgyLTE4YTYtNDg5MS1iYTI4LWQyOWY2MjMzZDEwYiIsImZpcnN0X25hbWUiOiJTd2FuenkiLCJtaWRkbGVfbmFtZSI6IiIsImxhc3RfbmFtZSI6IkNpdHkiLCJkYXRlX29mX2JpcnRoIjoiMjAyMy0wMS0wMlQwMDowMDowMC4wMDBaIiwiZ2VuZGVyIjoibWFsZSIsImVtYWlsIjoiYXJhQGdtYWlsLmNvbSIsInBob25lIjoiIiwicGhvdG8iOiJwaG90b18xNjg2MTgwMzU0NjkyLmpwZWciLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTA3VDIzOjE4OjM1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTA3VDIzOjI1OjU0LjAwMFoiLCJkZWxldGVkQXQiOm51bGwsImlhdCI6MTY4NjE4NDIwM30.KYBSAyAauxZarQnh5IBp08wy7QUceOMh9qO0HbNaMeI'
            // axios.get('http://192.168.8.127:5000/jobSeeker/getAllInfo', {headers: {token}})
            // .then((res) =>{
            //     console.log('res', res)
            // })
            // .catch((err) =>{
            //     console.log('err', err)
            // })

            
        }
    }

}
</script>

<style lang="css" scoped>
  .container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    /* border: 1px solid; */
    overflow: hidden;
    position: relative;
  }
  main{
    display: flex;
    gap: 50px;
    position: relative;
    
  }
  .details{
    width: 100%;
    height: 530px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    border-left: 1px solid #C2C2C2;
    margin-left:260px ;
    padding-left:40px ;
  }
  .card{
 
    border-bottom: 1px solid #C2C2C2;
    width: 100%;
    padding: 20px 0;
  }
</style>