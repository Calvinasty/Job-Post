<template>
    <div>
        <JobSearchNav/>
        <h1>{{currentJob}}</h1>
    </div>
</template>

<script>

import { useJobsStore } from '../stores/Jobs';
import { mapState } from 'pinia';
import { useRoute } from 'vue-router';
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue';
// import JobCard from '../components/jobsearchpage/JobCard.vue';
export default {
  components: { JobSearchNav },
    name: 'JobPostApplyJobPage',

    data() {
        return {
            currentJob:[]
            
        };
    },

    computed:{
        ...mapState(useJobsStore,['postedJobs'])
    },
    mounted(){
        this.handleJobDescription()

    },
    methods: {
        handleJobDescription(){
            const route =useRoute()
           const {jobId}= route.params

           console.log(this.postedJobs);
            this.currentJob=this.postedJobs.filter(job=>(job.id==jobId))
            console.log(this.currentJob);
        }   
        
    },
};
</script>

<style lang="scss" scoped>

</style>