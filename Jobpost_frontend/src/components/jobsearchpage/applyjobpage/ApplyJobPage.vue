<template>  
        <section class="job-container flex-center-row">
           <JobDescription :job="currentJob"/>
           <ApplyJobSection :user="currentUser"/>
        </section>
</template>

<script>

import { useJobsStore } from '../../../stores/Jobs';
import { useUserStore } from '../../../stores/users';
import { mapState } from 'pinia';
import { useRoute } from 'vue-router';
import JobDescription from './JobDescription.vue';
import ApplyJobSection from './ApplyJobSection.vue';
// import JobCard from '../components/jobsearchpage/JobCard.vue';
export default {
  components: { JobDescription, ApplyJobSection },
    name: 'JobPostApplyJobPage',

    data() {
        return {
            currentJob:[]
            
        };
    },

    computed:{
        ...mapState(useJobsStore,['postedJobs']),
        ...mapState(useUserStore,[''])
    },
    beforeMount(){
        const route =useRoute()
           const {jobId}= route.params
        console.log(jobId);
        this.handleJobDescription(jobId)

    },
    methods: {
        handleJobDescription(jobId){
            this.currentJob= this.postedJobs?.filter(job=>(job.id==jobId))
            console.log(this.currentJob);
        }   
        
    },
};
</script>

<style lang="css" scoped>
.job-container{
    width: 100%;
    background: #286a439c;
    padding: 0px 94px;
    align-items: flex-start;
    justify-content: flex-start;
    gap:41px;
}

</style>