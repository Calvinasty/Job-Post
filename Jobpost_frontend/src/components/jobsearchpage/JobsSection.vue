<template>
    <section class="jobs-listing flex-center">
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
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
                    jobName:''
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
    background: #b83939;
    flex: 1;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 28px;
    column-gap: 61px;
 }
</style>