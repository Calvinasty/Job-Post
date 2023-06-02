<template>
    <div class="register-info">
        
        <form action="" class="register-field flex-center">
            <InputComponent id="registrationNumber" type="text" placeHolder="Registration Number" name="registrationNumber" :handleInput="handleInput"/>
            <InputComponent id="vatNumber" type="text" placeHolder="VAT Number" name="vatNumber" :handleInput="handleInput"/>
            <label class="flex-center">Company Certificate (Commencement, Incorporation, VAT)<InputComponent id="companyCert" type="file" placeHolder="" name="companySite" :handleInput="handleInput"/></label>
        </form>
    </div>
</template>

<script>
    import InputComponent from '../../authpage/InputComponent.vue';
    export default {
       components: {
            InputComponent
       },
       data() {
        return {
            registrationNumber: '',
            vatNumber: '',
            companyCert: ''
        }
       },
       methods: {
        handleInput(data) {
            if(data.inputName == 'registrationNumber') { this.registrationNumber = data.inputValue }
            if(data.inputName == 'vatNumber') { this.vatNumber = data.inputValue }
            if(data.inputName == 'companyCert') { this.companyCert = data.inputValue }
        }
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
</style>