<template>
    <section class="jobs-listing ">
        <JobCard v-for="(job,index) in allJobs" :jobInfomation="job" :key="index"  :handleAccountCheck="handleAccountCheck"/>
        <SignInSignUpToApply :show="show" :handleClose="handleAccountCheck"/>          
    </section>
</template>

<script>

import JobCard from './JobCard.vue';
import SignInSignUpToApply from './SignInSignUpToApply.vue';
// import { jobsPosted } from '../../data';

export default {
    name: 'JobPostJobsSection',
    components: { JobCard, SignInSignUpToApply},
    props:[
    'allJobs'
    ],
    data(){
        return{
            // jobsPosted:jobsPosted
            show:false
            
        }
    },
    created(){
        // console.log('alljobs-card',this.allJobs);
    },
    methods:{
        handleAccountCheck(){
            this.show=!this.show
        }
    }
    
};
</script>

<style lang="css" scoped>
 .jobs-listing{
    /* flex: 1; */
    display: grid;
    grid-template-columns: 2fr 2fr 2fr ;
    width: 100%;
    row-gap: 28px;
    column-gap: 28px;
    padding-right:100px;
 }

 @media screen and (max-width:1417px) {
    .jobs-listing{
        grid-template-columns: 2fr 2fr;
    }
}
 @media screen and (max-width:1019px){
    .jobs-listing{
        grid-template-columns: 1fr;
        padding-right:50px; 
    }
    
 }
 @media screen and (max-width:685px) {
    .jobs-listing{
    padding-right:0px;    
    width: 100%;   
    max-width: none;
    align-content: center;
    justify-items: center;
    margin-top: 10px;

    }}
</style>