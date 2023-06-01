<template>
    <div class="jobsearch-page">
        <JobSearchNavVue :handleSearch="handleSearch" />
        <main class="jobs-section">
            <FilterSection/>
            <JobsSection :allJobs="filteredJobs"/>       
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import { useJobsStore } from '../stores/Jobs';
import { mapActions, } from 'pinia';
import FilterSection from '../components/jobsearchpage/FilterSection.vue';
import JobsSection from '../components/jobsearchpage/JobsSection.vue';
import JobSearchNavVue from '../components/jobsearchpage/JobSearchNav.vue';
export default {
    name: 'JobPostJobSearchPage',
    components:{
        FilterSection,
        JobsSection,
        JobSearchNavVue
    },
    data() {
        return {
            filteredJobs:[],
            AllPostedJobs:[]

        };
       
    },
    props:[
            
            ],
           
            beforeMount(){
        this.getAllJobs()
    },

    methods: {
        ...mapActions(useJobsStore,['setPostedJobs']),
        getAllJobs(){
             axios.get('http://192.168.1.53:3000/jobs?_sort=id&_order=desc')
             .then(res=>this.AllPostedJobs=res.data)
             .then(res=>{
                this.setPostedJobs(res)
                // console.log(res);
            })
             .then(()=>this.handleSearch() )
                       
                      
        },
        handleSearch(data){
            if(!data){
                return this.filteredJobs=this.AllPostedJobs
            }else{
                const result=this.AllPostedJobs.filter((item)=>(item.jobTitle.toLocaleLowerCase().includes(data.data)))
                return this.filteredJobs=[...result]
        }
        
    },}
};
</script>

<style lang="css" scoped>
    .jobsearch-page{
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 98dvw;
        margin: 0 auto;
        position:relative;
        gap: 30px;
    }
@media screen and (maxw-width:685){

}
    .jobs-section{
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
        .jobsearch-page{
            width: 100dvw;
        }
        .jobs-section{
            column-gap: 30px;
            justify-content: space-between;
        }
    }

    @media screen and (max-width:685px) {
        .jobsearch-page{
            justify-content: center;
            align-items:center ;
            gap: 0;
        }
        .jobs-section{
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin-top: 0px;
            padding: 0px 10px;

        }        
    }
</style>