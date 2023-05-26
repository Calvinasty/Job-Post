<template>
      <div class="filter-card-wrapper input-filters">
            <CheckInputCard :checkbox-text="jobTypes[0]"/>
            <CheckInputCard :checkbox-text="jobTypes[1]"/>
            <CheckInputCard :checkbox-text="jobTypes[2]"/>
            <CheckInputCard :checkbox-text="jobTypes[3]"/>
      </div>
</template>

<script>
import CheckInputCard from './CheckInputCard.vue';
export default {
    name: 'JobPostJopTypeFilter',
    components:{
        CheckInputCard
    },

    data() {
        return {
            jobTypes:[
                'FullTime',
                'PartTime',
                'Internship',
                'Remote'
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
    
</style>