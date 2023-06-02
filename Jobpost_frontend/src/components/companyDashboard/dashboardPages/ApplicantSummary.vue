<template>
    <!-- <div> -->
        <section class="container">
            <ApplicantSummaryHead />
            <ApplicantSummarySide :infos="infos" />
            <ApplicantSummaryCard :experiences="experiences" />
            <ApplicantSummaryCardSec :skills="skills" />
            <ApplicantSummaryCardTh :educations="educations" />
       </section>
   
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
            infos:
            [
                {image: '/images/userprofile.svg', name: 'Daniella McDan', address: 'Coral Avenue, Hse 3, Tantra Hills, Accra-Ghana. GHA-393-133'},
                {gender: 'Female', age: '27', email: 'danmcdan@gmail.com', linkedin: 'linkedin.com/daniellamcdan', number: '+233254775545'}

            ],
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
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%; 
    height: 0;
    align-items: start;
    height: 0;
    border: 1px solid black;
}
.head{
    grid-area: 1/1/2/5 ;
    border: 1px solid rgba(194, 194, 194, 1);
    padding: 20px 20px 20px 50px;
}
.side{
    grid-area: 2/1/8/2;
    padding: 20px;
    border: 1px solid rgba(194, 194, 194, 1);
}
.card-1, .card-2, .card-3{
    padding: 20px 20px 20px 50px;
}
.card-1{
    grid-area: 2/2/4/5;
    border: 1px solid rgba(194, 194, 194, 1);
}
.card-2{
    grid-area: 4/2/6/5;
    border: 1px solid rgba(194, 194, 194, 1);
}
.card-3{
    grid-area: 6/2/8/5;
    border: 1px solid rgba(194, 194, 194, 1);
}
</style>