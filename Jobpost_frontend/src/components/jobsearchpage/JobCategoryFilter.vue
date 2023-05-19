<template>
      <div class="filter-card-wrapper input-filters">
            <CheckInputCard :checkbox-text="jobTypes[0]"/>
            <CheckInputCard :checkbox-text="jobTypes[1]"/>
            <CheckInputCard :checkbox-text="jobTypes[2]"/>
            <CheckInputCard :checkbox-text="jobTypes[3]"/>
            <CheckInputCard :checkbox-text="jobTypes[4]"/>
      </div>
</template>

<script>
import CheckInputCard from './CheckInputCard.vue';
export default {
    name: 'JobPostJopCategoryFilter',
    components:{
        CheckInputCard
    },

    data() {
        return {
            jobTypes:[
                'Business',
                'Marketing',
                'Software Engineering',
                'Banking',
                'Finance'
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