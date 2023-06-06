<template>
    <div class="apply-job-page flex-center">
        <JobSearchNav/>
        <section class="job-container flex-center-row">
           <JobDescription :job="currentJob"/>
           <ApplyJobSection :user="currentUser"/>
        </section>
    </div>
</template>

<script>

import { useJobsStore } from '../stores/Jobs';
import { useUserStore } from '../stores/users';
import { mapState } from 'pinia';
import { useRoute } from 'vue-router';
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue';
import JobDescription from '../components/applyjobpage/JobDescription.vue';
import ApplyJobSection from '../components/applyjobpage/ApplyJobSection.vue';
// import JobCard from '../components/jobsearchpage/JobCard.vue';
export default {
  components: { JobSearchNav, JobDescription, ApplyJobSection },
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

<style lang="css" scoped>
.apply-job-page{
    row-gap:116px;
    justify-content: flex-start;
}
.job-container{
    width: 100%;
    background: #286a439c;
    padding: 0px 94px;
    align-items: flex-start;
    justify-content: flex-start;
    gap:41px

}

</style>