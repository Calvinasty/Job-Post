<template>  
        <section class="job-container flex-center-row">
           <JobDescription :job="currentJob"/>
           <ApplyJobSection :user="currentUser" :job="currentJob" :handleCancel="handleCancel"/>
        </section>
</template>

<script>

import { useJobsStore } from '../../../stores/Jobs'
import { useUserStore } from '../../../stores/users';
import {jobsPosted} from '../../../data'
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
            currentJob:[ ],
            currentUser:{
                 id:"fb0ab371-f0cd-491c-9b53-584b9b3572a4",
                first_name:"daniella",
                middle_name:"Aaa",
                last_name:"momo",
                date_of_birth:"2023-01-02T00:00:00.000Z",
                gender:"female","email":"ara@gmail.com",
                phone:"0244567843",
                password:"$2b$10$j93EGzXD/QT.6Kvw5fnW/uDY5Ze1LFJCXebnXoSQ/xcQIw7TSFCO.",
                photo:"avatar.jpg",
                createdAt:"2023-06-09T08:39:53.000Z",
                updatedAt:"2023-06-10T00:55:58.000Z",
                deletedAt:null}
            }

    },

    computed:{
        ...mapState(useJobsStore,['postedJobs']),
        ...mapState(useUserStore,['user'])
    },
    beforeMount(){
        const route =useRoute()
           const {jobId}= route.params
        //    console.log(jobId);
        this.handleJobDescription(jobId)

    },
    // created(){
    //     const route =useRoute()
    //        const {jobId}= route.params
    //     console.log(jobId);
    //     this.handleJobDescription(jobId)
    // },
    methods: {
        handleJobDescription(jobId){
            console.log(jobId);
            // this.currentJob= this.postedJobs.filter(job=>(job.id!==jobId))
            this.currentJob=jobsPosted.find(job=>(job.id==jobId))
            console.log(this.currentJob);
        },
        handleCancel(){
            this.currentJob={}
            this.$router.go(-1)
         
        },
        
    }, 
};
</script>

<style lang="css" scoped>
.job-container{
    width: 100%;
    /* background: #286a439c; */
    padding: 0px 50px;
    align-items: flex-start;
    justify-content: centert;
    gap:41px;
}

</style>