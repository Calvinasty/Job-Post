<template>
    <div class="jobsearch-page">
        <JobSearchNav :handleSearch="handleSearch"  :userExist="user"/>
       <RouterView/>
    </div>
</template>

<script>
// import { mapActions, } from 'pinia';
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue';
export default {
    name: 'JobPostJobSearchPage',
    components: {
        JobSearchNav
    },
};
</script>

<style lang="css" scoped>
.jobsearch-page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 98dvw;
    margin: 0 auto;
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