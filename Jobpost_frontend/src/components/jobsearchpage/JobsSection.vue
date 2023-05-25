<template>
    <section class="jobs-listing flex-center">
        <JobCard :jobInfomation="jobsList[0]"  />
        <JobCard :jobInfomation="jobsList[1]"/>
        <JobCard :jobInfomation="jobsList[2]"/>
        <JobCard :jobInfomation="jobsList[3]"/>
        <JobCard :jobInfomation="jobsList[4]"/>
        <JobCard :jobInfomation="jobsList[5]"/>
        <JobCard :jobInfomation="jobsList[0]"/>
        <JobCard :jobInfomation="jobsList[1]"/>
        <JobCard :jobInfomation="jobsList[2]"/>
        <JobCard :jobInfomation="jobsList[3]"/>
        <JobCard :jobInfomation="jobsList[4]"/>
        <JobCard :jobInfomation="jobsList[5]"/>
        
    </section>
</template>

<script>
import JobCard from './JobCard.vue';
import { jobsPosted } from '../../data';
export default {
    name: 'JobPostJobsSection',
    components: { JobCard },

    data() {
        return {
            jobsList:jobsPosted
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
 .jobs-listing{
    /* background: #b83939; */
    flex: 1;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 28px;
    column-gap: 61px;
    justify-content: flex-start;
    align-items: flex-start; 
 }
</style>