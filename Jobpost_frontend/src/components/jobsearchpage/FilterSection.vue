<template>
    <section class="filter-section">
        
        <header>
            <h2>Filters</h2>
            <button class="filter-btn">Reset</button>
        </header>
        <FilterCard :title="filterList[0]">
           <SalaryFilter/>
        </FilterCard>

        <FilterCard :title="filterList[1]">
            <JobTypeFilter/>
        </FilterCard>

        <FilterCard :title="filterList[2]">
            <JobCategoryFilter/>
        </FilterCard>

        <FilterCard :title="filterList[3]">
            <LocationFilter/>
        </FilterCard>

        <FilterCard :title="filterList[4]">
            <ExperinceFilter/>
        </FilterCard>
    </section>
</template>

<script>
import SalaryFilter from './SalaryFIlter.vue'
import FilterCard from './FilterCard.vue';
import JobCategoryFilter from './JobCategoryFilter.vue';
import JobTypeFilter from './JopTypeFilter.vue'
import ExperinceFilter from './ExperinceFilter.vue';
import LocationFilter from './LocationFilter.vue';
export default {
    name: 'JobPostFilterSection',
    components:{
        FilterCard,
        SalaryFilter,
        JobTypeFilter,
        JobCategoryFilter,
        ExperinceFilter,
        LocationFilter
    },
    data() {
         return {
            filterList:[
                'Salary Range',
                'Job Type',
                'Job Categories',
                'Location',
                'Experience'
            ],
                    
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

/* utitlity classes */

.filter-section{
    /* background: #000; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(249, 248, 248, 1);
    width: 300px;
    padding: 5px;
    border-radius: 5px;
}

.filter-section >header{
    height: 108px;
    font-size: 15px;
    font-weight: 700;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 22px;
    justify-content: space-between;
    border-bottom: 2px solid rgba(217, 217, 217, 1)
}
.filter-section header button{
    font-size: 15px;
    line-height: 20px;
    padding: 8px 16px;
    color: #88CC00;
    border: 1px solid #B9B9B9;
    border-radius: 15px;
    cursor: pointer;
    transition: all .3s ease-in-out;

}
.filter-section header button:hover{
    background: #88CC00;
    color: #f1f1f1;
    border: 1px solid #7FBF4C;
}



</style>