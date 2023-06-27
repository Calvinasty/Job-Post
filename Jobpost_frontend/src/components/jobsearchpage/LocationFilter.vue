<template>
      <div class="filter-card-wrapper location-filter">
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15881.869081054127!2d-0.249435!3d5.645326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9eb2725c769f%3A0x6e56e102246ca516!2sMaxim%20Nyansa%20IT%20Solutions!5e0!3m2!1sen!2sgh!4v1684459328788!5m2!1sen!2sgh" width="250" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        <select class="country-select" id="country" name="country" v-model="country" :handleInput="handleInput">
                    <option v-for="(country,index) in countries" :key="index" :value="country">{{ country }}</option>
        </select>
        <button @click.prevent="handleFilter" class="flex-cente-row apply-filter-btn" >
            Apply
            <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
        </button>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'JobPostLocationFilter',
    components:{
      
    },

    data() {
        return {     
            countries:[]
        };
    },

    beforeMount() {
        this.getCountries()
    },

    methods: {
        getCountries() {
                axios.get('https://countriesnow.space/api/v0.1/countries')
                .then(res => {
                    let getCountries = res.data.data.map(item => item.country)
                    this.countries = [...getCountries]
                    // console.log(getCountries);
                })
                // .then(() => this.getCountryStates() ) // method to get all states by country
                .catch(err => console.log(err))
            },
            // getCountryStates() {
            //     axios.post('https://countriesnow.space/api/v0.1/countries/states', {country: this.country})
            //     .then(res => {
            //         let states = res.data.data.states.map(state => state.name)
            //         this.states = states
            //     })
            //     .catch(err => console.log(err))
            // },
        
    },
};
</script>

<style lang="css" scoped>
.location-filter{
    justify-content: space-around;

    /* background: #000; */
    width: 100%;
    height: 100%;
}
.country-select{
    width: 100%;
    height: 30px;
    padding: 5px;
    border-radius:5px ;
    border: 1px solid #88CC00;
    outline:#88CC00;
}
  
    
</style>