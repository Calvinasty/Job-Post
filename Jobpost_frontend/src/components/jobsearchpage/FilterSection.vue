<template>
    <div>
    <section class="filter-section desktop">    
        <header>
            <h2>Filters</h2>
            <span>
                <button class="filter-btn">Reset</button>
            </span>
        </header>
        <FilterCard :title="filterList[0]">
           <SalaryFilter :applyFilter="applyFilter"  />
        </FilterCard>

        <FilterCard :title="filterList[1]">
            <JobTypeFilter :applyFilter="applyFilter" />
        </FilterCard>


        <FilterCard :title="filterList[3]">
            <LocationFilter :applyFilter="applyFilter"/>
        </FilterCard>
    </section>

    <section class="filter-section mobile">    
        <header :class="{showFilters:hideFilters}">
        <h2>Filters</h2>
        <span class="flex-center-row" >
            <button class="filter-btn">Reset</button>
            <img v-on:click="toggleDropdown" style="cursor: pointer;height: 20px;"   src="/images/dropdown_arrow.svg" alt="arrow">
        </span>
        </header>
        <span class="filter-container" :class="{hide:hideFilters}">
        <FilterCard :title="filterList[0]">
           <SalaryFilter/>
        </FilterCard>

        <FilterCard :title="filterList[1]">
            <JobTypeFilter/>
        </FilterCard>

        <FilterCard :title="filterList[3]">
            <LocationFilter />
        </FilterCard>
    </span>
    </section>
</div>
</template>

<script>
import SalaryFilter from './SalaryFIlter.vue'
import FilterCard from './FilterCard.vue';
// import JobCategoryFilter from './JobCategoryFilter.vue';
import JobTypeFilter from './JopTypeFilter.vue'
// import ExperinceFilter from './ExperinceFilter.vue';
import LocationFilter from './LocationFilter.vue';
export default {
    name: 'JobPostFilterSection',
    components:{
        FilterCard,
        SalaryFilter,
        JobTypeFilter,
        // JobCategoryFilter,
        // ExperinceFilter,
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
            hideFilters:true,                
        };
    },
    mounted() {
        
    },
    props:['applyFilter'],

    methods: {
        toggleDropdown(){
            // console.log('hello');
            this.hideFilters=!this.hideFilters
            this.hideFiltersMobile=!this.hideFiltersMobile
        }
        
    },
};
</script>

<style lang="css" scoped>

/* utitlity classes */

.filter-section{   /* background: #000; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(249, 248, 248, 1);
    width: 300px;
    padding: 5px;
    border-radius: 5px;
    margin-left: 30px;
}
.filter-section.mobile{
    display: none;
}
.mobile .filter-container{
    overflow: hidden;
    /* position:absolute; */
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all .3s ease;
    transition: height .3s ease;
}
.mobile .filter-container.hide{
    height: 0px;
    padding-top: 0px;
    transition: height .3s ease;
}
.filter-section.mobile >header{
        height: 50px;}
.filter-section.desktop{
    display:flex;
}
.mobile .showFilters img{
transform: rotate(-180deg);
transition: .3s ease;
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

@media screen and (max-width:685px) {
.filter-section.desktop{
    display: none;
}
.filter-section.mobile{
    display:flex;
    position: relative;
}
    .filter-section{
        width: 100%;
         max-width: 429px;  ;
        margin-left: 0px;
        padding: 0;
        z-index: 9;
        top:0vh;
    }

    .filter-section.mobile >header{
        height: 60px;
        font-size: 12px;
        background: rgba(242, 242, 242, 1);
    }
    .filter-section header button{
        margin-right: 10px;
        font-size: 12px;
    border:1px solid rgba(181, 181, 181, 1);

    }
}

</style>