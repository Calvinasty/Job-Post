<template>
    <div class="jobsearch-page">
        <JobSearchNav :handleSearch="handleSearch"  />
       <RouterView :allJobs="filteredJobs" />
    </div>
</template>

<script>
// import { mapActions, } from 'pinia';
import axios from 'axios'
import {useJobsStore} from '../stores/Jobs'
import { mapActions, mapState, } from 'pinia';
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue';
export default {
    name: 'JobPostJobSearchPage',
    components: {
        JobSearchNav

    },
    data(){
        return{
            filteredJobs: [],
            AllPostedJobs: []
        }
    }, 
    computed:{
        ...mapState(useJobsStore,['postedJobs'])
    },
    beforeMount() {
        this.getAllJobs()
    },

    methods: {
        ...mapActions(useJobsStore, ['setPostedJobs']),
        getAllJobs() {
            // this.AllPostedJobs = JSON.parse(localStorage.getItem('companyJobs'))
            axios.get('http://192.168.1.88:5000/job/availableJobs')
                .then(res => this.AllPostedJobs = res.data)
                .then(res => {   this.setPostedJobs(res)  
                    console.log(res);          
                })
                .then(() => this.handleSearch())

        },
        handleSearch(data) {
            if (!data) {
                return this.filteredJobs = this.AllPostedJobs
            } else {
                const result = this.AllPostedJobs.filter((item) => (item.jobTitle.toLocaleLowerCase().includes(data.data)))
                return this.filteredJobs = [...result]
            }

        }
    }
    
}
</script>

<style lang="css" scoped>
.jobsearch-page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98dvw;
    position: relative;
    gap: 30px;
}


@media screen and (max-width:871px) {
    .jobsearch-page {
        width: 100dvw;
    }

}

@media screen and (max-width:685px) {
    .jobsearch-page {
        justify-content: center;
        align-items: center;
        gap: 0;
    }
}
</style>