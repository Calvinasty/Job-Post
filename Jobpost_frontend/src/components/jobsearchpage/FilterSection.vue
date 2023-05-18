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
    width: 300px;
    padding: 5px;
    border-radius: 5px;
}

.filter-section >header{
    height: 108px;
    justify-content: space-around;
    border-bottom: 2px solid rgba(217, 217, 217, 1)
}
.filter-section header button{
    font-size: 15px;
    line-height: 20px;
    padding: 8px 16px;
    color: #7FBF4C;
    border: 1px solid #B9B9B9;
    border-radius: 15px;
    cursor: pointer;
    transition: all .3s ease-in-out;

}
.filter-section header button:hover{
    background: #7FBF4C;
    color: #f1f1f1;
    border: 1px solid #7FBF4C;
}

.filter-section >*{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>