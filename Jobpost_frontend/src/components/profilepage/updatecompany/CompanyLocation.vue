<template>
    <div class="register-info">
        <form action="" class="register-field flex-center">
            <label for="" class="country-label"> Country
                <select class="form-select" id="country" name="country" v-model="country" :handleInput="handleInput">
                    <option v-for="(country,index) in countries" :key="index" :value="country">{{ country }}</option>
                </select>
            </label>
            <label for="" class="country-label"> Region/State
                <select class="form-select" id="region" name="region" v-model="region" :handleInput="handleInput">
                    <option v-for="(state,index) in states" :key="index" :value="states.includes(region) ? state : region">{{ state }}</option>
                </select>
            </label>
            <!-- <InputComponent id="region" type="text" placeHolder="Region" name="region" :handleInput="handleInput" :Value="region" label="Region/State"/> -->
            <InputComponent id="address" type="text" placeHolder="Address" name="address" :handleInput="handleInput" :Value="address"/>
            <div class="btnsec flex-center-row">
                <button class="btn" @click.prevent="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapActions } from 'pinia';
    import { useCompanyStore } from '../../../stores/companies';
    const BASE_URL = import.meta.env.VITE_BASE_URL
    import InputComponent from '../../authpage/InputComponent.vue';
    export default {
        components: {
            InputComponent
        },

        props: [
        'handlecloseCard',
        // 'handleSave',
        'companyInfo'
        ],

        data(){
            return{
                countries: [],
                states: [],
                country: '',
                region: '',
                address: '',
            }
        },
        watch:{
            country(newCountry, oldCountry){
                if(newCountry !== oldCountry)
                    this.getCountryStates()
            }
        },        
        methods: {
            ...mapActions(useCompanyStore, ['updateCompany']),
            handleInput(data) {
                if(data.inputName == 'country') { this.country = data.inputValue }
                if(data.inputName == 'address') { this.address = data.inputValue }
                if(data.inputName == 'region') { this.region = data.inputValue }
            },
            getCountries() {
                axios.get('https://countriesnow.space/api/v0.1/countries')
                .then(res => {
                    let getCountries = res.data.data.map(item => item.country)
                    this.countries = getCountries
                })
                .then(() => this.getCountryStates() ) // method to get all states by country
                .catch(err => console.log(err))
            },
            getCountryStates() {
                axios.post('https://countriesnow.space/api/v0.1/countries/states', {country: this.country})
                .then(res => {
                    let states = res.data.data.states.map(state => state.name)
                    this.states = states
                })
                .catch(err => console.log(err))
            },
            handleSave(){
                const location = new FormData()
                location.append( "country", this.country)
                location.append( "address", this.address)
                location.append( "region", this.region)

                const token = JSON.parse(localStorage.getItem('companyToken'))
                axios.put(`${BASE_URL}/companyLocation/location`,location, {headers: {token}})
                .then(res => {
                    const updatedCompany = res.data.locationInfo
                    console.log(updatedCompany)
                    this.updateCompany(updatedCompany)
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },

        mounted() {
        //    axios.get('https://restcountries.com/v3.1/all')
        //    .then(res => {
        //         let getCountries = res.data.map((item) => {
        //             return item.name.common
        //         })
        //         this.countries = getCountries
        //    })

            this.getCountries() //method to get all countries from REST Api

            this.country = this.companyInfo?.location?.country
            this.address = this.companyInfo?.location?.address
            this.region = this.companyInfo?.location?.region
        },

        

    }
</script>

<style lang="css" scoped>
    .register-field {
        margin-top: 70px;
        row-gap: 60px;
    }
    .form-select {
        font-weight: 400;
        padding: 10px;
        width: 500px;
        color: #666;
        font-size: 14px;
        border: none;
        outline: none;
        border: 1px solid #7FBF4C;
        border-radius: 8px;
    }

    .btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
    /* background-color: aqua; */
}
    .country-label {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        color: #666;
        font-size: 14px;
    }

    .btnsec>* {
        border: none;
    }

    .btn {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #88CC00;
    color: #ffffff;
    }

.btns {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #000000;
    color: #ffffff;
    }

</style>