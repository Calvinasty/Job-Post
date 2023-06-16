<template>
        <div class="filter-card-wrapper salary-range">
        <div class="slider flex-center-row">
        <input type="range" id="min-range" min="0" step="50" :value="minSalary" max="5000"   @input="handleRange('min')">
        <input type="range" id="max-range" min="5000" step="50" :value="maxSalary" max="10000" @input="handleRange('max')">
        </div>
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
        <button @click.prevent="handleFilter" class="flex-cente-row apply-filter-btn" >
            Apply
            <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
        </button>
    </div>
      
</template>
<script>
import { useJobFilterStore } from '../../stores/jobFilters';
import { mapActions } from 'pinia';
export default {
    components:{
      
    },
    data() {
        return {
            
            minSalary:3000,
            maxSalary:6000,
        };
    },
  props:['applyFilter','loading'],

    methods: {
        ...mapActions(useJobFilterStore,['setSalaryRange']),
        handleRange(direction){
            if(direction==='min'){
                this.minSalary=   event.target.value         
            }
            if(direction==='max'){
                this.maxSalary=   event.target.value
            }
        },
        handleFilter(){
            console.log('ggg');
            this.setSalaryRange({minSalary:this.minSalary,maxSalary:this.maxSalary})
            this.applyFilter('salary')
        }
        
    },
};
</script>

<style lang="css" scoped>
.slider{
    width: 100%;
    position: relative;
    background: rgba(136, 204, 0, 1);
}
.slider input{
    -webkit-appearance:none;
    appearance:none;
    background:#88CC00;
    height: 5px;
    /* position: absolute; */
    width: 100%;
}
.slider input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 16px; /* Set a specific slider handle width */
  height: 16px; /* Slider handle height */
  background:#ffffff; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border: 3px solid #88CC00;
  border-radius:50%;
 
}
#min-range:hover,#max-range:hover{
    z-index: 999;
}


.slider input::-moz-range-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 16px; /* Set a specific slider handle width */
    height: 16px; /* Slider handle height */
    background:#ffffff; /* Green background */
    cursor: pointer; /* Cursor on hover */
    border: 3px solid #88CC00;
    border-radius:50%;
}
.salary-range{
    margin-top: 45px;
    row-gap: 40px;
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
    padding: 5px 15px ;
    background: rgba(217, 217, 217, 0.4);
    border-radius: 8px;
    border:none;
    min-width: 100px;
    box-shadow: 1px 1px 2px #000;
    
}
.salary-btn button span{
    display: block;
    width: 100%;
    text-align: left;
}
/* .salary-btn button:hover{
    background: #88CC00;
    transition: background .3s ease-in-out;
} */
/* .salary-btn button:active{
    box-shadow: -1px -1px 2px #000;
} */

</style>