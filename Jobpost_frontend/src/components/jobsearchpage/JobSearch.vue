<template>
     <main class="jobs-section">
            <FilterSection />
            <JobsSection :allJobs="filteredJobs" />
        </main>
</template>

<script>
import axios from 'axios'
import { useJobsStore } from '../../stores/Jobs'
import { mapActions, mapState, } from 'pinia';
import FilterSection from './FilterSection.vue';
import JobsSection from './JobsSection.vue';
export default {
    name: 'JobPostJobSearch',
    components:{FilterSection,JobsSection},

    data() {
        return {
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

        },
    }
};
</script>

<style lang="css" scoped>
.jobs-section {
    position: relative;
    margin-top: 85px;
    max-width: 1460px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 50px;
    width: 100%;
}

@media screen and (max-width:871px) {
    .jobs-section {
        column-gap: 30px;
        justify-content: space-between;
    }
}

@media screen and (max-width:685px) {

    .jobs-section {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        padding: 0px 10px;

    }
}
</style>