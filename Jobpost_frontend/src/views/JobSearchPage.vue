<template>
    <div class="jobsearch-page">
        <JobSearchNav :handleSearch="handleSearch"/>
       <RouterView :allJobs="filteredJobs"/>
    </div>
</template>

<script>
// import { mapActions, } from 'pinia';
import axios from 'axios'
import {useJobsStore} from '../stores/Jobs'
import { mapActions } from 'pinia';
const BASE_URL = import.meta.env.VITE_BASE_URL
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue';
export default {
    name: 'JobPostJobSearchPage',
    components: {
        JobSearchNav
    },
    data(){
        return{
            filteredJobs: [],
            AllPostedJobs: [],
        }
    }, 
    computed:{
        // ...mapState(useJobsStore,['postedJobs'])
    },
    beforeMount() {
        this.getAllJobs()
    },

    methods: {
        ...mapActions(useJobsStore, ['setPostedJobs']),
        getAllJobs() {
            // this.AllPostedJobs = JSON.parse(localStorage.getItem('companyJobs'))
            axios.get(`${BASE_URL}/company/allJobs`)
            .then(res =>{           
                    this.AllPostedJobs = res.data
                    // console.log(res.data);
                    return res.data
                } )
                .then(res => { 
                    this.setPostedJobs(res) 
                })
                .then(() => this.handleSearch())

        },
        handleSearch(data) {
            // console.log(this.AllPostedJobs)
            // console.log(data);
            if (!data|| data?.data=='') {
                return this.filteredJobs = this.AllPostedJobs
            } else {
                const result = this.AllPostedJobs.filter((item) => (item.job_title.toLocaleLowerCase().includes(data.data)))
                // console.log('result',result);
                return this.filteredJobs = result
            }

        },
        handleRange(direction){
            if(direction==='min'){this.minSalary=   event.target.value}
            if(direction==='max'){this.maxSalary=   event.target.value}
        }
    }
    
}
</script>

<style lang="css" scoped>
.jobsearch-page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 98dvw;
    position: relative;
    gap: 50px;
}


@media screen and (max-width:871px) {
    .jobsearch-page {
        width: 100dvw;
    }

}

@media screen and (max-width:685px) {
    .jobsearch-page {
        justify-content: flex-start;
        align-items: center;
        gap: 0;
    }
}
</style>