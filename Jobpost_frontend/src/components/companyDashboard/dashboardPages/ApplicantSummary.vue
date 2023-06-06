<template>
    
        <div class="container">
            <ApplicantSummaryHead class="head"/>
            <main>
                <ApplicantSummarySide class="side" />
                <div class="details">
                    <ApplicantSummaryCard class="card"/>
                    <ApplicantSummaryCardSec class="card"/>
                    <ApplicantSummaryCardTh class="card"/> 
                </div>
                </main>
        </div>
</template>

<script>
import ApplicantSummarySide from '../dashboardPages/applicants_summary/ApplicantSummarySide.vue'
import ApplicantSummaryCard from '../dashboardPages/applicants_summary/ApplicantSummaryCard.vue'
import ApplicantSummaryCardSec from '../dashboardPages/applicants_summary/ApplicantSummaryCardSec.vue'
import ApplicantSummaryCardTh from '../dashboardPages/applicants_summary/ApplicantSummaryCardTh.vue'
import ApplicantSummaryHead from '../dashboardPages/applicants_summary/ApplicantSummaryHead.vue'
export default {
    components:{
        ApplicantSummaryHead,
        ApplicantSummarySide,
        ApplicantSummaryCard,
        ApplicantSummaryCardSec,
        ApplicantSummaryCardTh
    },
    data(){
        return{
            // infos:
            // [
            //     {image: '/images/userprofile.svg', name: 'Daniella McDan', address: 'Coral Avenue, Hse 3, Tantra Hills, Accra-Ghana. GHA-393-133'},
            //     {gender: 'Female', age: '27', email: 'danmcdan@gmail.com', linkedin: 'linkedin.com/daniellamcdan', number: '+233254775545'}

            // ],
            experiences: 
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
                {name: 'University of Ghana, Legon', type: 'BSc. Administration | 2014-2018'}
            ]
        }
    }

}
</script>

<style lang="css" scoped>
  .container{
    display: flex;
    flex-direction: column;
    height: 100%;
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