<template>
    <div class="register-info">
        <form action="" class="register-field flex-center">
            <InputComponent id="registrationNumber" type="text" placeHolder="Registration Number" name="registrationNumber"
                :handleInput="handleInput" :Value="registrationNumber"/>
            <InputComponent id="vatNumber" type="text" placeHolder="VAT Number" name="vatNumber"
                :handleInput="handleInput" :Value="vatNumber"/>
            <label class="flex-center">Company Certificate (Commencement, Incorporation, VAT)
                <InputComponent id="companyCert" type="file" placeHolder="" name="companySite" :handleInput="handleInput" :Value="companyCert"/>
            </label>
            <div class="btnsec flex-center-row">
                <button class="btn" @click="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
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
    data() {
        return {
            registrationNumber: '',
            vatNumber: '',
            companyCert: ''
        }
    },
    methods: {
        handleInput(data) {
            if (data.inputName == 'registrationNumber') { this.registrationNumber = data.inputValue }
            if (data.inputName == 'vatNumber') { this.vatNumber = data.inputValue }
            if (data.inputName == 'companyCert') { this.companyCert = data.inputValue }
        },

        handleSave(){
                console.log(this.companyName);
        }
    },
    mounted() {
            this.registrationNumber = this.companyInfo.company_registration.registration_number
            this.vatNumber = this.companyInfo.company_registration.vat_number
            this.companyCert = this.companyInfo.company_registration.company_certificate
            
    }
}
</script>

<style lang="css" scoped>
.register-field {
    margin-top: 70px;
    row-gap: 60px;
}

label {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    row-gap: 10px;
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