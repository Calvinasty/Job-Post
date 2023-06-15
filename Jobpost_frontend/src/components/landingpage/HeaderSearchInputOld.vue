<template>
    <span class="filter-container">
        <!-- <label for="location">{{title}}</label> -->
        <span class="searchbar" v-if="type=='textFilter'">
            <span class="material-symbols-outlined"> search </span>
            <input :type="type" :placeholder="placeholder">
        </span>

        <select class="typebar" name="" id="" v-if="type=='filterType'">
            <option value="">Job Type</option>
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
            <option value="remote">Remote</option>
        </select>

        <select class="locationbar" name="" id="" v-if="type=='filterLocation'">
            <option value="">Location</option>
            <option v-for="location in locations" :value="location">{{ location }}</option>
        </select>

    </span>
</template>

<script>
    import axios from 'axios'
    export default {
        props:[
            "title",
            "placeholder",
            "type"
        ],
        data(){
            return{
                locations: []
            }
        },
        mounted() {
            this.getLocations()
        },
        methods: {
            getLocations(){
                axios.get('https://countriesnow.space/api/v0.1/countries')
                .then(res => {
                    let getCountries = res.data.data.map(item => item.country)
                    this.locations = getCountries
                })
                .catch(err => console.log(err))
            }
        },
    }
</script>
<style lang="css" scoped>
    /* @import '../../assets/landing_assets/headerComponent.css'; */
    .filter-container{
        width: 100%;
    }
    .searchbar{
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* align-items: stretch; */
    }
    .typebar{

    }
    .locationbar{}
    .searchbar span, input, select{
        /* height: 100%; */
        padding: 20px 0;
    }

</style>