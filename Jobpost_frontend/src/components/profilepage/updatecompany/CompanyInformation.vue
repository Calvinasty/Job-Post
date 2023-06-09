<template>
    <div class="company-info">
        <form action="" class="company-form">
            <InputComponent id="companyName" type="text" placeHolder="Company name" name="companyName" :handleInput="handleInput" :Value="companyName"/>
            <InputComponent id="phoneNumber" type="tel" placeHolder="Phone Number" name="phoneNumber" :handleInput="handleInput" :Value="companyNumber"/>
            <InputComponent id="companySite" type="url" placeHolder="Company Site" name="companySite" :handleInput="handleInput" :Value="companySite"/>
            <InputComponent id="linkin" type="url" placeHolder="LinkIn Link" name="linkin" :handleInput="handleInput" :Value="linkIn"/>
            <label for="" class="industry-label">Industry
                <select class="select" name="industry" id="industry" v-model="industry" :handleInput="handleInput" :Value="industry">
                    <option value="agriculture">Agriculture</option>
                    <option value="chemical">Chemical industries </option>
                    <option value="commerce">Commerce</option>
                    <option value="Construction">Construction</option>
                    <option value="education">Education</option>
                    <option value="financial">Financial services</option>
                    <option value="food">Food</option>
                    <option value="forestry">Forestry</option>
                    <option value="health">Health services</option>
                    <option value="hotels">Hotels</option>
                    <option value="mining">Mining</option>
                    <option value="mechanical">Mechanical and electrical engineering</option>
                    <option value="technology">Technology</option>
                </select>
            </label>
            
            <div class="btnsec flex-center-row">
                <button class="btn" @click.prevent="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
            </div>
        </form>
        
    </div>
</template>

<script>
    import InputComponent from '../../authpage/InputComponent.vue';
    import axios from 'axios'
    const BASE_URL = import.meta.env.VITE_BASE_URL
    export default {
        components: {
            InputComponent
        },

        props: [
        'handlecloseCard',
        // 'handleSave',
        'companyInfo'
    ],
        data() {
            return {
                companyName:'',
                companyNumber: '',
                companySite:'',
                linkIn: '',
                industry: '',

            }
        },
        methods:{
            handleInput(data){
                console.log(data);
                if(data.inputName == 'companyName') { this.companyName = data.inputValue }
                if(data.inputName == 'companyNumber') { this.companyNumber = data.inputValue }
                if(data.inputName == 'companySite') { this.companySite = data.inputValue }
                if(data.inputName == 'industry') { this.industry = data.inputValue }
            }, 

            handleSave(){
                console.log(this.companyName);
                const info = new FormData()
                info.append( "companyName",this.companyName)
                info.append( "companyNumber",this.companyNumber)
                info.append( "companySite",this.companySite)
                info.append( "industry",this.industry)

                const token = JSON.parse(localStorage.getItem('companyToken'))
                axios.post(`${BASE_URL}/company/updateInfo`,info, {headers: {token}})
            }
        },
        mounted() {
            this.companyName = this.companyInfo.company_name
            this.companyNumber = this.companyInfo.mobile_number
            this.companySite = this.companyInfo.website
            
        }
    }
</script>

<style lang="css" scoped>
    .company-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 30px;
        margin-top: 40px;
    }
    .select {
    font-weight: 400;
    padding: 10px;
    color: #666;
    font-size: 14px;
    border: none;
    outline: none;
    border: 1px solid #7FBF4C;
    border-radius: 8px;
    width: 500px;
}

.btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
    /* background-color: aqua; */
}

.industry-label {
    display: flex;
    flex-direction: column;
    color: #666;
    row-gap: 10px;
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