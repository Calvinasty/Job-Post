<template>
        <div class="filter-card-wrapper salary-range">
        <!-- <img src="/images/salary_range.svg" alt="salary range"> -->
        <div class="slider">
        <input type="range" min="0" max="200" value="100" @input="handleRange">
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
    </div>
      
</template>

<script>
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'
export default {
    components:{
      
    },
    data() {
        return {
            minSalary:200,
            maxSalary:1000,
           
            
        };
    },

    mounted() {
        
    },

    methods: {
        handleRange(){
         this.minSalary=   event.target.value
        }
        
    },
};
</script>

<style lang="css" scoped>
.salary-range{
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