<template>
    <section class="jobs-listing ">
        <JobCard v-for="(job,index) in allPostedJobs" :jobInfomation="job" :key="index"  />
            
    </section>
</template>

<script>
import JobCard from './JobCard.vue';
import axios from 'axios'
// import { jobsPosted } from '../../data';
export default {
    name: 'JobPostJobsSection',
    components: { JobCard },
    props:[
    'allJobs'
    ],
    data(){
        return{
            allPostedJobs:[]
        }
    },
    beforeMount(){
        this.getAllJobs()
    },
    methods:{
        async getAllJobs(){
            let results= await axios.get('http://192.168.1.53:3000/jobs?_sort=id&_order=desc')
            this.allPostedJobs=results.data
            console.log(results);

        }
    }

};
</script>

<style lang="css" scoped>
 .jobs-listing{
    /* flex: 1; */
    display: grid;
    grid-template-columns: 2fr 2fr ;
    width: 100%;
    row-gap: 28px;
    column-gap: 28px;
    padding-right:100px;
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