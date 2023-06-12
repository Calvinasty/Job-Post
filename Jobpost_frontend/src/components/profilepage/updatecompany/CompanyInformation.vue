<template>
    <div class="company-info">
        <form action="" class="company-form">
            <InputComponent id="companyName" type="text" placeHolder="Company name" name="companyName" :handleInput="handleInput" :Value="companyName"/>
            <InputComponent id="companyName" type="email" placeHolder="Company Email" name="companyEmail" :handleInput="handleInput" :Value="companyEmail"/>
            <InputComponent id="phoneNumber" type="tel" placeHolder="Phone Number" name="phoneNumber" :handleInput="handleInput" :Value="companyNumber"/>
            <InputComponent id="companySite" type="url" placeHolder="Company Site" name="companySite" :handleInput="handleInput" :Value="companySite"/>
            <InputComponent id="linkedIn" type="url" placeHolder="LinkedIn Link" name="linkedIn" :handleInput="handleInput" :Value="linkedIn"/>
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
    import axios from 'axios'
    import {mapActions} from 'pinia'
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
        'companyInfo',
        'updateComponent'
    ],
        data() {
            return {
                companyName:'',
                companyEmail: '',
                companyNumber: '',
                companySite:'',
                linkedIn: '',
                industry: '',

            }
        },
        methods:{
            ...mapActions(useCompanyStore, ['updateCompany']),
            handleInput(data){
                console.log(data);
                if(data.inputName == 'companyName') { this.companyName = data.inputValue }
                if(data.inputName == 'companyEmail') { this.companyEmail = data.inputValue }
                if(data.inputName == 'companyNumber') { this.companyNumber = data.inputValue }
                if(data.inputName == 'companySite') { this.companySite = data.inputValue }
                if(data.inputName == 'linkedIn') { this.linkedIn = data.inputValue }
                if(data.inputName == 'industry') { this.industry = data.inputValue }
            }, 

            handleSave(){
                console.log(this.companyName);
                const info = new FormData()
                info.append( "company_name",this.companyName)
                info.append( "email",this.companyEmail)
                info.append( "mobile_number",this.companyNumber)
                info.append( "website",this.companySite)
                info.append( "linkedin",this.linkedIn)
                info.append( "industry",this.industry)

                const token = JSON.parse(localStorage.getItem('companyToken'))
                axios.put(`${BASE_URL}/company/updateInfo`,info, {headers: {token}})
                .then(res => {
                    const updatedCompany = res.data.findCompany
                    console.log(updatedCompany)
                    this.updateCompany(updatedCompany)
                    this.handlecloseCard()

                    // this.updateComponent(1)
                    // this.$router.push('/admin/companyProfile')
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    
                })
            }
        },
        mounted() {
            this.companyName = this.companyInfo.company_name
            this.companyEmail = this.companyInfo.email
            this.companyNumber = this.companyInfo.mobile_number
            this.companySite = this.companyInfo.website
            this.linkedIn = this.companyInfo.linkedin
            this.industry = this.companyInfo.industry
            
        }
    }
</script>

<style lang="css" scoped>
    .company-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;
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