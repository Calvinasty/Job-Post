<template>
      
          <div class="filter-card-wrapper input-filters">
                <CheckInputCard :checkbox-text="jobTypes[0]"/>
                <CheckInputCard :checkbox-text="jobTypes[1]"/>
                <CheckInputCard :checkbox-text="jobTypes[2]"/>
                <CheckInputCard :checkbox-text="jobTypes[3]"/>
                <button @click.prevent="handleFilter" class="flex-cente-row apply-filter-btn" >
                  Apply
                  <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
              </button>
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

    props:['applyFilter'],

    methods: {
        handleFilter(){
            console.log('ggg');
            this.setSalaryRange({minSalary:this.minSalary,maxSalary:this.maxSalary})
            this.applyFilter('type')
        }
    },
};
</script>

<style lang="css" scoped>
    
</style>