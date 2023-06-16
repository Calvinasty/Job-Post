<template>
        <div class="filter-card-wrapper input-filters">
              <CheckInputCard :checkbox-text="jobTypes[0]"/>
              <CheckInputCard :checkbox-text="jobTypes[1]"/>
              <CheckInputCard :checkbox-text="jobTypes[2]"/>
              <button @click.prevent="handleFilter" class="flex-cente-row apply-filter-btn" >
                  Apply
                  <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
              </button>
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