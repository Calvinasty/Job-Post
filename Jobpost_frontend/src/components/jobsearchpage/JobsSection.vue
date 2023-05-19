<template>
    <section class="jobs-listing flex-center">
        <JobCard :jobExperince="jobsList[0].jobExperince" :job-location="jobsList[0].jobLocation" :jobSalary="jobsList[0].jobSalary" />
        <JobCard :jobExperince="jobsList[0].jobExperince" :job-location="jobsList[0].jobLocation" :jobSalary="jobsList[0].jobSalary" />
        <JobCard :jobExperince="jobsList[0].jobExperince" :job-location="jobsList[0].jobLocation" :jobSalary="jobsList[0].jobSalary" />
        <JobCard :jobExperince="jobsList[0].jobExperince" :job-location="jobsList[0].jobLocation" :jobSalary="jobsList[0].jobSalary" />
        
    </section>
</template>

<script>
import JobCard from './JobCard.vue';
export default {
    name: 'JobPostJobsSection',
    components: { JobCard },

    data() {
        return {
            jobsList:[
                {
                    jobSalary:'GH¢ 20k-40k',
                    jobExperince:'3 Years',
                    jobLocation:'Tantra Hills',
                }
            ]
            
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
 }
</style>