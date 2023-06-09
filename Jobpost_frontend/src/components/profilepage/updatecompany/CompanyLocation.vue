<template>
    <div class="register-info">
        <form action="" class="register-field flex-center">
            {{ country }}
            <select class="form-select" id="country" name="country" v-model="country" :handleInput="handleInput">
                <option v-for="(country,index) in countries" :key="index" :value="country">{{ country }}</option>
            </select>
            <InputComponent id="address" type="text" placeHolder="Address" name="address" :handleInput="handleInput"/>
            <InputComponent id="region" type="text" placeHolder="Region" name="region" :handleInput="handleInput"/>
            <div class="btnsec flex-center-row">
                <button class="btn" @click="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import InputComponent from '../../authpage/InputComponent.vue';
    export default {
        components: {
            InputComponent
        },

        props: [
        'handlecloseCard',
        'handleSave',
        ],

        data(){
            return{
                countries: [],
                country: '',
                address: '',
                region: ''
            }
        },
        mounted() {
           axios.get('https://restcountries.com/v3.1/all')
           .then(res => {
                let getCountries = res.data.map((item) => {
                    return item.name.common
                })
                this.countries = getCountries
           })
        },
        methods: {
            handleInput(data) {
                if(data.inputName == 'country') { this.country = data.inputValue }
                if(data.inputName == 'address') { this.address = data.inputValue }
                if(data.inputName == 'region') { this.region = data.inputValue }
            }
        }
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