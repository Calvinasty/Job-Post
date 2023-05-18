<template>
    <div class="jobsearch-page">
        

        <main class="jobs-section">
            <FilterSection/>
            <JobsSection/>       
        </main>
    </div>
</template>

<script>
import FilterSection from '../components/jobsearchpage/FilterSection.vue';
import JobsSection from '../components/jobsearchpage/JobsSection.vue';
export default {
    name: 'JobPostJobSearchPage',
    components:{
        FilterSection,
        JobsSection
    },
    data() {
        return {
            
        };
    },


    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
    .jobsearch-page{
        background: rgba(242, 242, 242, 1);
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .jobs-section{
        margin: 85px;
        max-width: 1460px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        column-gap: 100px;
        width: 100%;
    }
</style>