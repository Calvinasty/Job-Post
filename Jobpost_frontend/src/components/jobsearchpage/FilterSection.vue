<template>
    <section class="filter-section">
        
        <header>
            <h2>Filters</h2>
            <button>Reset</button>
        </header>
        <FilterCard/>
       
        
    </section>
</template>

<script>
import FilterCard from './FilterCard.vue';
export default {
    name: 'JobPostFilterSection',
    components:{
        FilterCard
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

/* utitlity classes */

.filter-section{
    /* background: #000; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(249, 248, 248, 1);
    width: 399px;
    padding: 5px;
    border-radius: 5px;
}
.filter-section >*{
    width: 100%;
}
</style>