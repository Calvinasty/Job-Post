<template>
     <main class="jobs-section">
            <FilterSection :applyFilter="applyFilter"/>
            <JobsSection :allJobs="allJobs" />
        </main>
</template>

<script>

import FilterSection from './FilterSection.vue';
import JobsSection from './JobsSection.vue';
export default {
    // name: 'JobPostJobSearch',
    components:{FilterSection,JobsSection},
    props:['allJobs'],

    data() {
        return {
          
        }
    },
    methods:{
        applyFilter(filter){
            if(filter =='salary'){
                alert('salary')
            }
            if(filter =='jobtype'){
                alert('jobtype')
            }
            if(filter =='location'){
                alert('location')
            }


        }
    },
    } 

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