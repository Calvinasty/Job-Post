<template>
    <div class="jobsearch-page">
        <JobSearchNavVue />
        <main class="jobs-section">
            <FilterSection/>
            <JobsSection/>       
        </main>
    </div>
</template>

<script>
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
        justify-content: flex-start;
        align-items: center;
        width: 98dvw;
        margin: 0 auto;
        gap: 20px;
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
            column-gap: 10px;
            justify-content: space-between;
        }
        
    }
</style>