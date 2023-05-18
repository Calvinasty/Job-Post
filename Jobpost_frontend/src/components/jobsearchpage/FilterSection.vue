<template>
    <section class="filter-section">
        
        <header>
            <h2>Filters</h2>
            <button class="filter-btn">Reset</button>
        </header>
        <FilterCard :title="filterList[0]">
            <img src="/images/salary_range.svg" alt="salary range">
            <span  class="salary-btn">
                <button>
                    <span>MIN</span>
                    <span> GH¢{{ minSalary }}  </span>
                </button>
                <button >
                    <span>MAX</span>
                    <span> GH¢{{ maxSalary }}  </span>
                </button>
            </span>
        </FilterCard>

        <FilterCard :title="filterList[1]">
            
        </FilterCard>

        <FilterCard :title="filterList[2]">
        </FilterCard>

        <FilterCard :title="filterList[3]">
        </FilterCard>

        <FilterCard :title="filterList[4]">
        </FilterCard>
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
            filterList:[
                'Salary Range',
                'Job Type',
                'Job Categories',
                'Location',
                'Experience'
            ],
            minSalary:200,
            maxSalary:1000
            
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

.salary-btn{
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
.salary-btn button{
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    color: #706A6A;
    padding: 5px 25px ;
    background: rgba(217, 217, 217, 0.4);
    border-radius: 8px;
    border:none;
    cursor: pointer;
    box-shadow: 1px 1px 2px #000;
    
}
.salary-btn button span{
    display: block;
    width: 100%;
    text-align: left;
}
.salary-btn button:hover{
    background: #88CC00;
    transition: background .3s ease-in-out;
}
.salary-btn button:active{
    box-shadow: -1px -1px 2px #000;
}


</style>