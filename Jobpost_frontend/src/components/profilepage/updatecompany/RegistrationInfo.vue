<template>
    <div class="register-info">
        <form action="" class="register-field flex-center">
            <InputComponent inputId="companyName" inputType="number" inputName="Registration Number" name="companyName" />
            <InputComponent inputId="vatNumber" inputType="number" inputName="VAT Number" name="vatNumber" />
            <InputComponent inputId="companySite" inputType="file" inputName="" name="companySite" />
        </form>
    </div>
</template>

<script>
    import InputComponent from '../EditInputComponent.vue';
    export default {
       components: {
            InputComponent
       } 
    }
</script>

<style lang="css" scoped>
    .register-field {
        margin-top: 70px;
        row-gap: 60px;
    }
</style>