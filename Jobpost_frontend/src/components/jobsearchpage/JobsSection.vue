<template>
    <section class="jobs-listing flex-center">
        <JobCard :jobInfomation="jobsList[0]"  />
        <JobCard :jobInfomation="jobsList[1]"/>
        <JobCard :jobInfomation="jobsList[2]"/>
        <JobCard :jobInfomation="jobsList[0]"/>
        
    </section>
</template>

<script>
import JobCard from './JobCard.vue';
export default {
    name: 'JobPostJobsSection',
    components: { JobCard },

    data() {
        return {
            jobsList:[
                {
                    jobSalary:'GH¢ 20k-40k',
                    jobExperince:'3 Years',
                    jobLocation:'Tantra Hills, Accra',
                    jobTitle:'Backend Engineer',
                    jobPoster:'Maxim Nyansa',
                    jobPosterLogo:'/images/logo.png',
                    jobUpdatedAt:'2 hours',
                    jobPositionsAvailable:'6 of 10'
                },
                {
                    jobSalary:'GH¢ 20k-40k',
                    jobExperince:'2 Years',
                    jobLocation:'Tantra Hills, Accra',
                    jobTitle:'Frontend Engineer',
                    jobPoster:'Maxim Nyansa',
                    jobPosterLogo:'/images/logo.png',
                    jobUpdatedAt:'2 hours',
                    jobPositionsAvailable:'3 of 10'
                },
                {
                    jobSalary:'GH¢ 30k-80k',
                    jobExperince:'7 Years',
                    jobLocation:'Tantra Hills, Accra',
                    jobTitle:'UI-UX Designer',
                    jobPoster:'Maxim Nyansa',
                    jobPosterLogo:'/images/logo.png',
                    jobUpdatedAt:'2 hours',
                    jobPositionsAvailable:'8 of 10'
                }
            ]
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
 .jobs-listing{
    /* background: #b83939; */
    flex: 1;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 28px;
    column-gap: 61px;
 }
</style>