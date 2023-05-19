<template>
      <div class="filter-card-wrapper input-filters">
            <CheckInputCard :checkbox-text="experince[0]"/>
            <CheckInputCard :checkbox-text="experince[1]"/>
            <CheckInputCard :checkbox-text="experince[2]"/>
            <!-- <CheckInputCard :checkbox-text="experince[3]"/>
            <CheckInputCard :checkbox-text="experince[4]"/> -->
      </div>
</template>

<script>
import CheckInputCard from './CheckInputCard.vue';
export default {
    name: 'JobPostJopExperinceFilter',
    components:{
        CheckInputCard
    },

    data() {
        return {
            experince:[
                '2+ Years',
                '3+ Years',
                'Unemployed',
                // 'Banking',
                // 'Finance'
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